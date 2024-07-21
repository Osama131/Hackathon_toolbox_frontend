import { Binary } from 'mongodb';
import { Input, Textarea, Button } from '@/lib/next-ui';
import SelectTutorials from './Components/SelectTutorials';

const CreateEvent = async () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const body = formData;
    console.log("body", body);
    // TODO: fetch actual logged in user
    body.append('owner','admin')
    if (body.get('tutorials')?.length === 0) {
      body.tutorials = [];
    }else if (typeof body.tutorials === 'string') {
      body.tutorials = [body.tutorials];
    }
    console.log("body", body);
    // FIXME: relative path
    const response = await fetch('http://localhost:3000/hack-participant-kit/api/events', {
      method: 'POST',
      body,
    });
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
  };

  return (
    <form
      className="flex flex-col gap-4 w-4/5 lg:w-1/2 m-auto my-10 p-4
        border border-stone-100 shadow-md event_form"
      action={handleSubmit}
    >
      <h1 className="text-center font-medium text-lg">Create Event</h1>
      <Input
        isRequired
        required
        radius="none"
        label="Name"
        type="text"
        name="name"
      />

      <Textarea
        radius="none"
        label="Description"
        name="description"
      />

      <label
        className="text-sm text-stone-500"
        htmlFor="image"
      >
        Image
      </label>
      <input
        title="Image"
        type="file"
        name="image"
        accept="image/*"
        className="text-sm text-stone-500
          file:mr-5 file:py-2 file:px-3 file:border-none
          file:text-xs file:font-medium
        file:bg-stone-100 file:text-stone-700
          hover:file:cursor-pointer hover:file:bg-orange-50
        hover:file:text-orange-700"
      />

      <span className="flex gap-3">
        <Input
          isRequired
          required
          radius="none"
          label="Starts on"
          type="date"
          name="startDate"
        />
        <Input
          radius="none"
          label="at"
          type="time"
          name="starttime"
        />
      </span>

      <span className="flex gap-3">
        <Input
          radius="none"
          label="Ends on"
          type="date"
          name="endDate"
        />
        <Input
          radius="none"
          label="at"
          type="time"
          name="endTime"
        />
      </span>

      <Input
        isRequired
        required
        radius="none"
        label="Venue / Location"
        type="text"
        name="venue"
      />

      {/* TODO: add additional links*/}
      {/* <Input radius="none" label="Links" type="text" name="links" /> */}
      <SelectTutorials />

      {/* TODO : add preview card*/}

      <Button
        type="submit"
        color="warning"
        radius="none"
      >
        Create Event
      </Button>
    </form>
  );
};

export default CreateEvent;
