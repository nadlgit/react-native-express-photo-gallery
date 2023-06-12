import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text } from 'react-native';
import { getPhotoUri, type PhotoDetails } from '@/api/picsum';
import { PRIMARY_COLOR } from '@/theme';

type PhotoGridProps = { photos: PhotoDetails[]; hasMore: boolean; onGetMore: () => void };

export const PhotoGrid = ({ photos, hasMore, onGetMore }: PhotoGridProps) => {
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
      ListEmptyComponent={<Text style={styles.text}>No data</Text>}
      ListFooterComponent={
        hasMore ? <ActivityIndicator color={PRIMARY_COLOR} style={styles.footerLoader} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: PRIMARY_COLOR,
  },
  footerLoader: {
    marginVertical: 10,
  },
});
