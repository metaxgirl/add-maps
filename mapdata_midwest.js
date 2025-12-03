var simplemaps_countymap_mapdata = {

  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#AAAAAA",
    popups: "detect",

    // Non-service areas
    state_description: "Outside Service Area",
    state_color: "#D3D3D3",
    state_hover_color: "#B8B8B8",
    state_url: "",

    // Service counties
    county_description: "",
    county_color: "#E5E5E5",
    county_hover_color: "#5d8dbd",
    county_url: "",

    fade_time: 0.3,
    all_states_in_zoom: "yes",
    zoom_time: 0.3,

    div: "map-midwest",
    auto_load: "no",

    // Borders - County only (as requested)
    state_border_color: "#ffffff",
    state_border_size: 1,
    county_border_color: "#ffffff",
    county_border_size: 1.2,

    hide_labels: "yes",

    popup_color: "#ffffff",
    popup_opacity: 0.95,
    popup_shadow: 1,
    popup_font_size: 14
  },

  state_specific: {
    /* ---------- SOUTH DAKOTA (3-hour radius from Hayti) ---------- */
    "46057": { name: "Hamlin County, SD", color: "#3b6ea5", url: "/south-dakota", description: "Headquarters in Hayti, SD" },
    "46029": { name: "Codington County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46025": { name: "Clark County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46077": { name: "Kingsbury County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46011": { name: "Brookings County, SD", color: "#3b6ea5", url: "/south-dakota" },
    "46039": { name: "Deuel
