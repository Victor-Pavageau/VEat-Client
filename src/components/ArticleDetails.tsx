import { Collapse } from "antd";
import { useEffect, useState } from "react";
import { useGetArticleById } from "../hooks/useGetArticleById";

type Props = {
  articleId: string;
};

function ArticleDetails(props: Props) {
  const { articleId } = props;

  const { data: article } = useGetArticleById(articleId!);
  const [articleInfo, setArticleInfo] = useState(article);

  useEffect(() => {
    setArticleInfo(article);
  }, [article]);

  return (
    <>
      {articleInfo ? (
        <Collapse
          className="bg-[--light-gray] w-full"
          items={[
            {
              key: articleInfo.uid,
              label: articleInfo.name,
              children: <div>{articleInfo.description}</div>,
            },
          ]}
          bordered={false}
        />
      ) : (
        <div />
      )}
    </>
  );
}

export default ArticleDetails;
