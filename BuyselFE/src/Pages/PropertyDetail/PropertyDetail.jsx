import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderProperty from '../../Layouts/PropertyDetail/Header/Header'
import MapSection from '../../Layouts/PropertyDetail/MapSection/MapSection'
import Featured from '../../Layouts/Home/Featured/Featured'
import AppPromoBanner from '../../Components/AppPromoBanner/AppPromoBanner'
import Footer from '../../Components/Footer/Footer'
import { DescriptionAndAminities } from '../../Layouts/PropertyDetail/DescriptionAndAminities/DescriptionAndAminities'
import { getPropertyDetail } from '../../Api/userApi'
import { getRelatedProperties } from '../../Api/userApi'
import Loading from '../../Components/Loading/Loading'
function PropertyDetail() {

  const { id, type } = useParams()

  const [productDetail, setProductDetail] = useState(null)
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true)

  const extractLatLng = (url) => {
    const match = url.match(/@([-.\d]+),([-.\d]+)/);

    if (match) {
      return {
        lat: parseFloat(match[1]),
        lng: parseFloat(match[2])
      };
    }

    return null;
  };

const transformProperty = (data) => {
  const coords = extractLatLng(data.location);
  return {
    id: data.id,
    title: data.label, 
    location: `${data.city}, ${data.state}`,
    status: data.purpose,
    price: `₹${Number(data.price_details.price).toLocaleString()}`,
    area: `${data.price_details.sq_ft} sq.ft`,
    postedOn: data.created_at,
    fullAddress: data.location,
        is_wishlist: data.is_wishlist,
    latitude: coords?.lat,
    longitude: coords?.lng,
    landmarks: data.land_mark.map(item => ({
      name: item.name,
      distance: item.distance
    })),
    description: data.description,
    addressfully : `${data.location_details.village} ${data.location_details.city} ${data.location_details.state} ${data.location_details.pincode} `,
    keySellingPoint: data.key_selling_points.map(item => ({
      content: item
    })),
    seller: {
      company: "Owner",
      name: data.contact_details.owner,
      phone: data.contact_details.phone,
      image: data.contact_details.owner_profile_image 
    },
    features: data.property_features || [],
    images: data.images,
    amenities: data.amenities || []
  }
}
  useEffect(() => {
    const fetchRelated = async () => {
      const res = await getRelatedProperties(id);

      if (res) {
        setSimilarProperties(res.data);
      }
    };

    fetchRelated();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPropertyDetail(id, type)

      if (res) {
        const formatted = transformProperty(res)
        setProductDetail(formatted)
      }

      setLoading(false)
    }

    fetchData()
  }, [id])
  if (loading) return <Loading />
  if (!productDetail) return <div>No Property Found</div>

  return (
    <div>
      <HeaderProperty property={productDetail} />
      <DescriptionAndAminities data={productDetail} />
      <MapSection
        address={productDetail.addressfully}
        latitude={productDetail.latitude}
        longitude={productDetail.longitude}
        landmarks={productDetail.landmarks}
      />
      <Featured
        title="Similar Properties"
        subTitle="Explore our latest listings for sale, rent and lease across"
        data={similarProperties}
      />
      <AppPromoBanner />
      <Footer />
    </div>
  )
}

export default PropertyDetail