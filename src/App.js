import React from "react";
import ReactDOM from "react-dom/client";

const resObj = {
  "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
  layout: {
    columns: 4,
  },
  id: "restaurant_grid_listing",
  gridElements: {
    infoWithStyle: {
      "@type":
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
      restaurants: [
        {
          info: {
            id: "220360",
            name: "Priya",
            cloudinaryImageId: "oivksbtnt4ufouny0srf",
            locality: "Jaydev Vihar",
            areaName: "Jayadev Vihar",
            costForTwo: "₹250 for two",
            cuisines: ["South Indian", "North Indian", "Tandoor"],
            avgRating: 4.4,
            veg: true,
            parentId: "161324",
            avgRatingString: "4.4",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 29,
              lastMileTravel: 2.4,
              serviceability: "SERVICEABLE",
              slaString: "29 mins",
              lastMileTravelString: "2.4 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 15:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/priya-jaydev-vihar-jayadev-vihar-bhubaneswar-220360",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "374680",
            name: "Hotel Venus",
            cloudinaryImageId: "rmidmp2inrxp3qvjlov7",
            locality: "Siripur",
            areaName: "Suryanagar",
            costForTwo: "₹200 for two",
            cuisines: ["Indian", "Snacks"],
            avgRating: 4.4,
            veg: true,
            parentId: "103288",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 32,
              lastMileTravel: 3.8,
              serviceability: "SERVICEABLE",
              slaString: "32 mins",
              lastMileTravelString: "3.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 22:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/hotel-venus-siripur-suryanagar-bhubaneswar-374680",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "406241",
            name: "Idli Bhavan",
            cloudinaryImageId: "rhit7qzpegudc8nxlsch",
            locality: "Housing Board Colony",
            areaName: "Baramunda",
            costForTwo: "₹200 for two",
            cuisines: ["South Indian", "Chinese"],
            avgRating: 4.3,
            veg: true,
            parentId: "105861",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 26,
              lastMileTravel: 2.7,
              serviceability: "SERVICEABLE",
              slaString: "26 mins",
              lastMileTravelString: "2.7 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 22:30:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/idli-bhavan-housing-board-colony-baramunda-bhubaneswar-406241",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "110185",
            name: "Chapan Bhog",
            cloudinaryImageId: "x6x1srh1d4mlnyppoyvw",
            locality: "Jayadev Vihar Road",
            areaName: "Jayadev Vihar",
            costForTwo: "₹150 for two",
            cuisines: ["Sweets", "Indian", "Desserts"],
            avgRating: 4.4,
            veg: true,
            parentId: "58021",
            avgRatingString: "4.4",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 17,
              lastMileTravel: 1.9,
              serviceability: "SERVICEABLE",
              slaString: "17 mins",
              lastMileTravelString: "1.9 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 22:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/chapan-bhog-road-jayadev-vihar-bhubaneswar-110185",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "135956",
            name: "Maharaja Ganguram",
            cloudinaryImageId: "qtvveopbwpczdniuglu1",
            locality: "Housing Board Colony",
            areaName: "Baramunda",
            costForTwo: "₹100 for two",
            cuisines: ["Sweets"],
            avgRating: 4.3,
            veg: true,
            parentId: "129876",
            avgRatingString: "4.3",
            totalRatingsString: "5K+",
            sla: {
              deliveryTime: 23,
              lastMileTravel: 2.1,
              serviceability: "SERVICEABLE",
              slaString: "23 mins",
              lastMileTravelString: "2.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 23:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/maharaja-ganguram-housing-board-colony-baramunda-bhubaneswar-135956",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "113267",
            name: "Manomay",
            cloudinaryImageId: "o4atraoorr8del7os9bv",
            locality: "Bomikhal",
            areaName: "Lakshmi Sagar",
            costForTwo: "₹150 for two",
            cuisines: ["Sweets", "Desserts", "South Indian", "Snacks"],
            avgRating: 4.5,
            veg: true,
            parentId: "132222",
            avgRatingString: "4.5",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 31,
              lastMileTravel: 7.4,
              serviceability: "SERVICEABLE",
              slaString: "31 mins",
              lastMileTravelString: "7.4 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 23:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/manomay-bomikhal-lakshmi-sagar-bhubaneswar-113267",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "497736",
            name: "Jogi Bhai Dahibara Aludam",
            cloudinaryImageId: "qaslu4auoahr1qdxb4x6",
            locality: "Soubhagya Nagar",
            areaName: "Suryanagar",
            costForTwo: "₹100 for two",
            cuisines: ["Snacks", "Desserts"],
            avgRating: 4.6,
            veg: true,
            parentId: "298494",
            avgRatingString: "4.6",
            totalRatingsString: "100+",
            sla: {
              deliveryTime: 23,
              lastMileTravel: 2.8,
              serviceability: "SERVICEABLE",
              slaString: "23 mins",
              lastMileTravelString: "2.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 14:00:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: "pureveg",
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/jogi-bhai-dahibara-aludam-soubhagya-nagar-suryanagar-bhubaneswar-497736",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "744844",
            name: "Burger King",
            cloudinaryImageId: "aa77cb6fce4d94f3ad4b4e7fb42782db",
            locality: "Pal Heights",
            areaName: "bhubaneswar",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.4,
            parentId: "166",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 29,
              lastMileTravel: 3,
              serviceability: "SERVICEABLE",
              slaString: "29 mins",
              lastMileTravelString: "3.0 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-01-01 01:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-pal-heights-bhubaneswar-bhubaneswar-744844",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          info: {
            id: "330287",
            name: "Mio Amore",
            cloudinaryImageId: "zxltikkqtvsmwcjwpgkz",
            locality: "Mio Amore CRP, Near CRP Square",
            areaName: "Crpf Colony",
            costForTwo: "₹150 for two",
            cuisines: ["Desserts", "Bakery", "Snacks"],
            avgRating: 4.3,
            parentId: "4569",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            sla: {
              deliveryTime: 18,
              lastMileTravel: 1.1,
              serviceability: "SERVICEABLE",
              slaString: "18 mins",
              lastMileTravelString: "1.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-12-31 23:59:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹120 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: "seo-data-66f6a419-45ed-472f-bc1f-9cd9985e5440",
          },
          cta: {
            link: "https://www.swiggy.com/restaurants/mio-amore-mio-amore-crp-near-crp-square-crpf-colony-bhubaneswar-330287",
            text: "RESTAURANT_MENU",
            type: "WEBLINK",
          },
          widgetId:
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
      ],
      theme: "SeoRestaurantListingGridWidget",
    },
  },
};

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="pizza image"
      />
      <h3>{name}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.gridElements.infoWithStyle.restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
