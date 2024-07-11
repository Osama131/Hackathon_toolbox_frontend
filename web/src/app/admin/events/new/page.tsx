import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const CreateEvent = () => {
  return (
    <form className="flex flex-col gap-4 w-4/5 lg:w-1/2 m-auto my-10 p-4 border border-stone-100 shadow-md event_form">
      <h1 className="text-center font-medium text-lg">Create Event</h1>
      <Input radius="none" label="Title" type="text" name="title" />

      <Textarea radius="none" label='Description' name="description" />

      <label className="text-sm text-stone-500" htmlFor="image">
        Image
      </label>
      <input title="Image" type="file" name="image" accept="image/*"
        className="text-sm text-stone-500
          file:mr-5 file:py-2 file:px-3 file:border-none
          file:text-xs file:font-medium
        file:bg-stone-100 file:text-stone-700
          hover:file:cursor-pointer hover:file:bg-orange-50
        hover:file:text-orange-700"
      />

      <span className="flex gap-3">
        <Input radius="none" label="Starts on" type="date" name="startingDate" />
        <Input radius="none" label="at" type="time" name="startingTime" />
      </span>

      <span className="flex gap-3">
        <Input radius="none" label="Ends on" type="date" name="endDate" />
        <Input radius="none" label="at" type="time" name="endTime" />
      </span>

      <Input radius="none" label="Venue / Location" type="text" name="venue" />

      {/* TODO: select tutorials and add additional links*/}
      <Input radius="none" label="Links" type="text" name="links" />

      {/* TODO : add preview card*/}

      <Button type="submit" color="warning" radius="none">Create Event</Button>
    </form>
  );
};

export default CreateEvent;
