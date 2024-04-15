import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { BADGE_CRITERIA } from "@/constants";
import { BadgeCounts } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const SECOND = 1;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30.44 * DAY; // Average length
  const YEAR = 365.25 * DAY; // Average length, accounting for leap years

  const now = new Date();
  const differenceInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  if (differenceInSeconds < MINUTE) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < HOUR) {
    return `${Math.floor(differenceInSeconds / MINUTE)} minutes ago`;
  } else if (differenceInSeconds < DAY) {
    return `${Math.floor(differenceInSeconds / HOUR)} hours ago`;
  } else if (differenceInSeconds < WEEK) {
    return `${Math.floor(differenceInSeconds / DAY)} days ago`;
  } else if (differenceInSeconds < MONTH) {
    return `${Math.floor(differenceInSeconds / WEEK)} weeks ago`;
  } else if (differenceInSeconds < YEAR) {
    return `${Math.floor(differenceInSeconds / MONTH)} months ago`;
  } else {
    return `${Math.floor(differenceInSeconds / YEAR)} years ago`;
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num === undefined || num === null) {
    return "0";
  }

  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const joinedDate = `${month} ${year}`;
  return joinedDate;
};

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => delete currentUrl[key]);

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface BadgeParam {
  criteria: {
    type: keyof typeof BADGE_CRITERIA;
    count: number;
  }[];
}
export const assignBadges = (params: BadgeParam) => {
  const badgeCounts: BadgeCounts = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };

  const { criteria } = params;

  criteria.forEach((item) => {
    const { type, count } = item;
    const badgeLevels: any = BADGE_CRITERIA[type];

    Object.keys(badgeLevels).forEach((level: any) => {
      if (count >= badgeLevels[level]) {
        badgeCounts[level as keyof BadgeCounts] += 1;
      }
    });
  });
  return badgeCounts;
};
