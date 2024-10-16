import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '100%',
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#646363',
    textAlign: 'center',
  },
  moviePoster: {
    width: 160,
    height: 240,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  movieItem: {
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#e6e5e5',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 2 / 3, 
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  overview: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  details: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  LoadingScreen: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#242424',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  loadImage: {
    width: 140,
    height: 140,
  
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}
);
