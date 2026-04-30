import React, { useEffect, useState } from 'react'
import HeaderDashboardProperty from '../../../../Components/DashboardLPropertyDetail/Header/Header'
import DescAndAminities from '../../../../Components/DashboardLPropertyDetail/Description&Aminities/DescAndAminities'
import { useParams } from 'react-router-dom'
import { getPropertyDetail } from '../../../../Api/userApi'

function DashboardPropertyDetail() {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  const transformProperty = (data) => {
    return {
      id: data.id,
      title: data.label,
      location: `${data.city}, ${data.state}`,
      status: data.purpose,

      price: `₹${Number(data.price).toLocaleString()}`,
      area: data.sq_ft ? `${data.sq_ft} sq.ft` : "N/A",
      postedOn: data.created_at,

      description: data.description,

      seller: {
        company: "Owner",
        name: data.owner,
        phone: data.phone,
        image: "https://via.placeholder.com/100"
      },

      // ✅ KEEP ARRAY (IMPORTANT)
      features: data.features || [],

      images: data.images?.length ? data.images : [data.image],
      amenities: data.amenities || []
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

  if (loading) return <div>Loading...</div>
  if (!productDetail) return <div>No Property Found</div>

  return (
    <div>
      <HeaderDashboardProperty property={productDetail} />
      <DescAndAminities data={productDetail} />
    </div>
  )
}

export default DashboardPropertyDetail