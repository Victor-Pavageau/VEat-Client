import { useQuery } from "@tanstack/react-query";
import { fetchArticleById, fetchMenuById } from "../api/restaurant";

export function useGetExistingMenuById(itemId: string, isMenu: boolean) {
    return useQuery(["get-menu"], () => fetchMenuById(itemId), { enabled: isMenu });
}

export function useGetExistingArticleById(itemId: string, isArticle: boolean) {
    return useQuery(["get-article"], () => fetchArticleById(itemId), { enabled: isArticle });
}
