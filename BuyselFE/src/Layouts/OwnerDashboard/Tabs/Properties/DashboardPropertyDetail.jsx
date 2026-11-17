import React, { useEffect, useState } from 'react'
import HeaderDashboardProperty from '../../../../Components/DashboardLPropertyDetail/Header/Header'
import DescAndAminities from '../../../../Components/DashboardLPropertyDetail/Description&Aminities/DescAndAminities'
import { useParams } from 'react-router-dom'
import { getPropertyDetail } from '../../../../Api/userApi'
import { getAgentPropertyNote } from '../../../../Api/agentsApi'

function DashboardPropertyDetail() {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(true)
    const [notes, setNotes] = useState([]);
    const [visitedCount, setVisitedCount] = useState(0);



  const transformProperty = (data) => {
    return {
      id: data.id,
      title: data.label,
       location: `${data.city}, ${data.state}, ${data.location_details?.pincode || "N/A"}`,
      status: data.purpose,

      price: `${data.price_details?.price}`,
      area: data.price_details?.sq_ft
      ? `${data.price_details.sq_ft} sq.ft`
      : "N/A",
      postedOn: data.created_at,

      description: data.description,
     seller: {
      company: "Owner",
      name: data.contact_details?.owner,
      phone: data.contact_details?.phone,
      image: data.contact_details?.owner_profile_image,
    },

      // ✅ KEEP ARRAY (IMPORTANT)
    features: data.property_features || [],
    images: data.images?.length ? data.images : [data.image],
    amenities: data.amenities || [],
    key_selling_points: data.key_selling_points || [],
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPropertyDetail(id)

      if (res) {
        const formatted = transformProperty(res)
        setProductDetail(formatted)
      }

      setLoading(false)
    }

    fetchData()
  }, [id])



useEffect(() => {
  const loadNotes = async () => {
    try {
      const res = await getAgentPropertyNote(id);
      setNotes(res.notes || []);
      setVisitedCount(res.visited_count || 0);
    } catch (err) {
      setNotes([]);
    }
  };

  loadNotes();
}, [id]);

  if (loading) return <div>Loading...</div>
  if (!productDetail) return <div>No Property Found</div>

  return (
    <div>
      <HeaderDashboardProperty property={productDetail} />
<DescAndAminities data={productDetail} notes={notes} visitedCount={visitedCount} />
    </div>
  )
}

export default DashboardPropertyDetail