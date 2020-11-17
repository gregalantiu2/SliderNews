import { Article } from './article';

export class NewsApiResponseModel {
    status: string;
    totalResults: number;
    articles: Article[];
}