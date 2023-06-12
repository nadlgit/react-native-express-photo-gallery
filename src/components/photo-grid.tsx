import { Dimensions, FlatList, Image } from 'react-native';
import { getPhotoUri, type PhotoDetails } from '@/api/picsum';

type PhotoGridProps = { photos: PhotoDetails[]; onGetMore: () => void };

export const PhotoGrid = ({ photos, onGetMore }: PhotoGridProps) => {
  const NUM_COLUMNS = 3;
  const { width } = Dimensions.get('window');
  const imgSize = Math.floor(width / NUM_COLUMNS);
  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: getPhotoUri(item.id, imgSize),
            width: imgSize,
            height: imgSize,
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={NUM_COLUMNS}
      onEndReached={onGetMore}
    />
  );
};
