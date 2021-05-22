import BlogList from '../../components/BlogList';
import useFetch from '../../components/useFetch';

const Home: React.FC = () => {

    const {data:blogs, error, isLoading} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"></BlogList>
        </div>
    );
}

export default Home;
