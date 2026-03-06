import { Text, View, Image, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { images } from '@/constants/images'
import { debug } from '@/constants/debug'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

export default function Index() {
  const router = useRouter()

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        style={debug.red}
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
        style={debug.green}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          style={debug.blue}
        />
        <View className="flex-1 mt-5" style={debug.blue}>
          <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
        </View>
      </ScrollView>
    </View>
  )
}
