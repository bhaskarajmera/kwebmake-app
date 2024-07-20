import { useQuery } from "@apollo/client";
import { GET_HOME_PAGE_DATA } from "src/queries";
import SEO from "./SEO";
import BannersComponent from "./BannersComponent";
import AboutComponent from "./AboutComponent";
import CategoriesComponent from "./CategoriesComponent";
import ServicesComponent from "./ServicesComponent";
import PopularColoursComponent from "./PopularColoursComponent";
import JoinComponent from "./JoinComponent";
import BlogsComponent from "./BlogsComponent";
import FooterComponent from "./FooterComponent";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOME_PAGE_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    pages: {
      nodes: [homepageData],
    },
    allColourCategory: { nodes: colourCategories },
    blogs: { nodes: blogs },
  } = data;

  return (
    <div>
      <SEO seo={homepageData.seo} />
      <BannersComponent banners={homepageData.homepage.banners} />
      <div className="px-20">
        <AboutComponent
          homeAboutSubtitle={homepageData.homepage.homeAboutSubtitle}
          homeAboutTitle={homepageData.homepage.homeAboutTitle}
          homeAboutDescription={homepageData.homepage.homeAboutDescription}
          homeAboutButtonTitle={homepageData.homepage.homeAboutButton.title}
          homeAboutVideoImage={
            homepageData.homepage.homeAboutVideoImage.node.sourceUrl
          }
          homeAboutVideoImageName={
            homepageData.homepage.homeAboutVideoImage.node.__typename
          }
        />
        <CategoriesComponent
          homeCategorySubtitle={homepageData.homepage.homeCategorySubtitle}
          homeCategoryTitle={homepageData.homepage.homeCategoryTitle}
          categories={homepageData.homepage.categories}
        />
        <ServicesComponent
          homeServicesSubtitle={homepageData.homepage.homeServicesSubtitle}
          homeServicesTitle={homepageData.homepage.homeServicesTitle}
        />
        <PopularColoursComponent
          homeColoursSubtitle={homepageData.homepage.homeColoursSubtitle}
          homeColoursTitle={homepageData.homepage.homeColoursTitle}
          homeColoursButtonTitle={homepageData.homepage.homeColoursButton.title}
          colourCategories={colourCategories}
        />
      </div>
      <JoinComponent
        homeJoinSubtitle={homepageData.homepage.homeJoinSubtitle}
        homeJoinTitle={homepageData.homepage.homeJoinTitle}
        homeJoinDescription={homepageData.homepage.homeJoinDescription}
        homeJoinBackgroundImage={
          homepageData.homepage.homeJoinBackgroundImage.node.sourceUrl
        }
        homeJoinBackgroundImageName={
          homepageData.homepage.homeJoinBackgroundImage.node.__typename
        }
        homeJoinButtonTitle={homepageData.homepage.homeJoinButton.title}
      />
      <div className="px-20">
        <BlogsComponent
          blogSubtitle={homepageData.homepage.blogSubtitle}
          blogTitle={homepageData.homepage.blogTitle}
          blogs={blogs}
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
