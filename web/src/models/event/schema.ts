import { Schema, Document, Connection, Model } from 'mongoose';

interface EventLink extends Document {
  title: string;
  url: string;
  description: string;
}

interface Event extends Document {
  name: string;
  description?: string;
  image?: Buffer;
  startDate: Date;
  endDate?: Date;
  owner: Schema.Types.ObjectId;
  tutorials?: Schema.Types.ObjectId[];
  venue: string;
  links?: EventLink[];
  lastModified: Date;
  created: Date;
}

const LinkSchema = new Schema<EventLink>({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const eventSchema = new Schema<Event>({
  name: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: async function (value: string) {
        const count = await this.model('Event').countDocuments({
          name: value,
          owner: this.owner,
        });
        return !count;
      },
      message: 'An event with the same name and owner already exists',
    },
  },
  description: {
    type: String,
  },
  // FIXME
  // image: {
  //   type: Buffer,
  // },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    validate: {
      validator: function (value: Date) {
        return value >= this.startDate;
      },
      message: 'End date cannot be before start date',
    },
  },
  owner: {
    // TODO: change to ObjectId
    // type: Schema.Types.ObjectId,
    type: String,
    required: true,
  },
  tutorials: {
    type: [Schema.Types.ObjectId],
  },
  venue: {
    type: String,
    required: true,
  },
  links: {
    type: [LinkSchema],
  },
  lastModified: {
    type: Date,
    required: true,
    default: Date.now,
  },
  created: {
    type: Date,
    required: true,
  },
});

const getEventModel = (connection: Connection): Model<Event> =>
  connection.model('Event', eventSchema);

export { getEventModel };
