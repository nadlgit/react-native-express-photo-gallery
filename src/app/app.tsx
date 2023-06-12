import { ActivityIndicator } from 'react-native';
import { Container, PhotoGrid } from '@/components';
import { usePhotos } from '@/store';
import { PRIMARY_COLOR } from '@/theme';

export default function App() {
  const { photos, isLoading, fetchMore } = usePhotos();
  return (
    <Container>
      {!photos.length && isLoading ? (
        <ActivityIndicator color={PRIMARY_COLOR} size="large" />
      ) : (
        <PhotoGrid photos={photos} onGetMore={fetchMore} />
      )}
    </Container>
  );
}
