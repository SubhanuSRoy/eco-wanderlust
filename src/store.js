export const sustainable = {
  source: "Kolkata, India",
  destination: "Abu Dhabi, UAE",
  itinerary: [
    {
      mode: "train",
      from: "Kolkata",
      to: "New Delhi",
      carbon_footprint: 84.6,
    },
    {
      mode: "flight",
      from: "New Delhi",
      to: "Dubai",
      carbon_footprint: 507.8,
    },
    {
      mode: "car",
      from: "Dubai",
      to: "Abu Dhabi",
      carbon_footprint: 39.2,
    },
  ],
  accommodation: [
    {
      name: "Eco Resort",
      address: "Abu Dhabi, UAE",
      image_url:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316850140.jpg?k=711212577d543119c0429bdb61b5cf8cea9b94a639f2dc8f4e6323b56d6b1b62&o=&hp=1",
      carbon_footprint: 20.0,
    },
  ],
  places_to_visit: [
    {
      name: "Sheikh Zayed Grand Mosque",
      address: "Abu Dhabi, UAE",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Sheikh_Zayed_Mosque_view.jpg",
      carbon_footprint: 5.0,
    },
    {
      name: "Ferrari World",
      address: "Abu Dhabi, UAE",
      image_url:
        "https://res.klook.com/image/upload/u_activities:a39f45bd-Ferrari-World-Abu-Dhabi,w_1.0,ar_3:2,c_scale,e_blur:10000/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/a39f45bd-Ferrari-World-Abu-Dhabi.jpg",
      carbon_footprint: 4.0,
    },
    {
      name: "Saadiyat Island",
      address: "Abu Dhabi, UAE",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Al_Jubail_Saadiyat_Island_aerial_view.jpg/1200px-Al_Jubail_Saadiyat_Island_aerial_view.jpg",
      carbon_footprint: 3.0,
    },
  ],
  total_carbon_footprint_saved: 590.4,
};

export const unsustainable = {
  source: "Kolkata, India",
  destination: "Abu Dhabi, UAE",
  itinerary: [
    {
      mode: "flight",
      from: "Kolkata",
      to: "Abu Dhabi",
      carbon_footprint: 1649.2,
    },
  ],
  accommodation: [
    {
      name: "Luxury Hotel",
      address: "Abu Dhabi, UAE",
      image_url: "https://theluxuryeditor.com/wp-content/uploads/2018/09/104682512.jpg",
      carbon_footprint: 100.0,
    },
  ],
  places_to_visit: [
    {
      name: "Sheikh Zayed Grand Mosque",
      address: "Abu Dhabi, UAE",
      image_url: "https://upload.wikimedia.org/wikipedia/en/7/7d/Sheikh_Zayed_Mosque_view.jpg",
      carbon_footprint: 5.0,
    },
    {
      name: "Ferrari World",
      address: "Abu Dhabi, UAE",
      image_url: "https://res.klook.com/image/upload/u_activities:a39f45bd-Ferrari-World-Abu-Dhabi,w_1.0,ar_3:2,c_scale,e_blur:10000/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/a39f45bd-Ferrari-World-Abu-Dhabi.jpg",
      carbon_footprint: 4.0,
    },
    {
      name: "Emirates Palace",
      address: "Abu Dhabi, UAE",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/413px-Emirates_Palace.jpg",
      carbon_footprint: 2.0,
    },
  ],
  total_carbon_footprint_saved: 0,
};
