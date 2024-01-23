import Link from "next/link";
import React from "react";
import RenderTag from "@/components/shared/RenderTag";
import Metric from "@/components/shared/Metric";
import { getTimestamp, formatAndDivideNumber } from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  view: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  view,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">{title}</h3>
          </Link>
        </div>

        {/* {if signed in add edit delete actions} */}
      </div>

    <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
    </div>

    <div className="flex-between mt-6 w-full flex-wrap gap-3">
            <Metric 
                imgURL={author.picture}
                alt="user"
                value={author.name}
                title={` - asked ${getTimestamp(createdAt)}`}
                href={`/profile/${author._id}`}
                isAuthor
                textStyles="body-medium text-dark400_light700"
            />
            <Metric 
                imgURL="/assets/icons/like.svg"
                alt="Upvotes"
                value={formatAndDivideNumber(upvotes)}
                title=" Votes"
                textStyles="small-medium text-dark400_light800"
            />
            <Metric 
                imgURL="/assets/icons/message.svg"
                alt="message"
                value={formatAndDivideNumber(answers.length)}
                title=" Answers"
                textStyles="small-medium text-dark400_light800"
            />
            <Metric 
                imgURL="/assets/icons/eye.svg"
                alt="eyes"
                value={formatAndDivideNumber(view)}
                title=" Views"
                textStyles="small-medium text-dark400_light800"
            />
    </div>

    </div>
  );
};

export default QuestionCard;
