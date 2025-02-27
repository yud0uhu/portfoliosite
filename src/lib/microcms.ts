import {
  createClient,
  type MicroCMSQueries,
  type MicroCMSImage,
} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Works = {
  productTitle: string;
  productData: string;
  githubUrl: string;
  productDatail: string;
  productComposition: string;
  productImage: MicroCMSImage;
  productUrl: string;
};

export type WorksResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Works[];
};

export type DailyUi = { title: string; image: MicroCMSImage; figma: string };

export type DailyUiResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: DailyUi[];
};

export const getList = async (queries?: MicroCMSQueries) => {
  return await client.get<WorksResponse>({ endpoint: "works", queries });
};

export const getDailyUIList = async (queries?: MicroCMSQueries) => {
  return await client.get<DailyUiResponse>({ endpoint: "dailyui", queries });
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
};
