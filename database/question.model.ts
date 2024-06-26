import { Schema, models, model, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

export interface ITags {
  _id: string;
  name: string;
}

export interface IUpvotes {
  _id: string;
}

export interface IAuthor {
  _id: string;
  name: string;
  picture: string;
}

export type IQuestionWithTags = Omit<IQuestion, "tags"> & {
  tags: ITags[];
};
export type IQuestionWithTagsUpVotes = Omit<IQuestionWithTags, "upvotes"> & {
  upvotes: IUpvotes[];
};
export type IQuestionWithTagsUpVotesAuthor = Omit<
  IQuestionWithTagsUpVotes,
  "author"
> & {
  author: IAuthor;
};

const QuestionSchema = new Schema<IQuestion>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionSchema);

export default Question;
