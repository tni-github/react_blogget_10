import { usePopularPosts } from '../../../hooks/usePopularPosts';
import PreLoader from '../../../UI/PreLoader';
import { Text } from '../../../UI/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [popularPosts, postLoading] = usePopularPosts();

  return (
    <ul className={style.list}>
      {postLoading === 'loading' && <PreLoader />}
      {postLoading === 'error' && (
        <Text As='p' color='orange' center fontWeight='bold'>
          Упс... Ошибка загрузки постов на страницу
        </Text>
      )}
      {postLoading === 'loaded' &&
        popularPosts.map((postData) => (
          <Post key={postData.data.id} dataPost={postData.data} />
        ))}
    </ul>
  );
};
