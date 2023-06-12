import { useEffect, useState } from 'react';
import { getPhotoListPage, type PhotoDetails } from '@/api/picsum';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotoDetails[]>([]);
  const [hasMore, sethasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [isFetchRequest, setIsFetchRequest] = useState(true);

  useEffect(() => {
    if (isFetchRequest && hasMore) {
      setIsLoading(true);
      getPhotoListPage(nextPage).then((data) => {
        setPhotos((list) => [...list, ...data.photos]);
        sethasMore(data.hasMore);
        setNextPage((val) => val + 1);
        setIsLoading(false);
      });
      setIsFetchRequest(false);
    }
  }, [hasMore, isFetchRequest, nextPage]);

  return {
    photos,
    hasMore,
    isLoading,
    fetchMore: () => setIsFetchRequest(true),
  };
};
