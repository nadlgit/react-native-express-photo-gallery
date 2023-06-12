import { useEffect, useState } from 'react';
import { getPhotoListPage, type PhotoDetails } from '@/api/picsum';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotoDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [isFetchRequest, setIsFetchRequest] = useState(true);

  useEffect(() => {
    if (isFetchRequest) {
      setIsLoading(true);
      getPhotoListPage(nextPage).then((data) => {
        setPhotos((list) => [...list, ...data]);
        setNextPage((val) => val + 1);
        setIsLoading(false);
      });
      setIsFetchRequest(false);
    }
  }, [isFetchRequest, nextPage]);

  return { photos, isLoading, fetchMore: () => setIsFetchRequest(true) };
};
