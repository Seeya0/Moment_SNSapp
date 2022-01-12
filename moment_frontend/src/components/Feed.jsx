import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';
import MasonryLayout from './MasonryLayout ';

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  const ideaName = categoryId || 'new';

  if (loading) {
    return <Spinner message={`フィードに ${ideaName} を追加しています！`} />;
  }

  if (!pins?.length) return <h2>閲覧可能な写真がありません</h2>;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
