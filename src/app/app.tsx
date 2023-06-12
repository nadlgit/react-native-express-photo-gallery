import { ActivityIndicator } from 'react-native';
import { Container, PhotoGrid } from '@/components';
import { usePhotos } from '@/store';

export default function App() {
  const { photos, isLoading, fetchMore } = usePhotos();
  return (
    <Container>
      {!photos.length && isLoading ? (
        <ActivityIndicator size="large" color="grey" />
      ) : (
        <PhotoGrid photos={photos} onGetMore={fetchMore} />
      )}
    </Container>
  );
}
