var simplemaps_countymap_mapdata = {
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

    // State Defaults
    state_description: "",
    state_color: "#d3d3d3",
    state_hover_color: "#a9a9a9",
    state_url: "",

    // County Defaults
    county_description: "",
    county_color: "#e5e5e5",
    county_hover_color: "#6095bf",
    county_url: "",

    div: "map-ne",
    auto_load: "no", // SINGLE LOAD via explicit load()

    // Zoom
    zoom: "yes",
    manual_zoom: "yes",
    initial_zoom: "-1"
  },

  state_specific: {
    /* CONNECTICUT — Full State */
    "09001": { name: "Fairfield County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Fairfield County" },
    "09003": { name: "Hartford County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Hartford County" },
    "09005": { name: "Litchfield County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Litchfield County" },
    "09007": { name: "Middlesex County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Middlesex County" },
    "09009": { name: "New Haven County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – New Haven County" },
    "09011": { name: "New London County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – New London County" },
    "09013": { name: "Tolland County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Tolland County" },
    "09015": { name: "Windham County, CT", color: "#3b6ea5", url: "/connecticut", description: "Service Area – Windham County" },

    /* RHODE ISLAND — Full State */
    "44001": { name: "Bristol County, RI", color: "#3b6ea5", url: "/rhode-island", description: "Service Area – Bristol County" },
    "44003": { name: "Kent County, RI", color: "#3b6ea5", url: "/rhode-island", description: "Service Area – Kent County" },
    "44005": { name: "Newport County, RI", color: "#3b6ea5", url: "/rhode-island", description: "Service Area – Newport County" },
    "44007": { name: "Providence County, RI", color: "#3b6ea5", url: "/rhode-island", description: "Service Area – Providence County" },
    "44009": { name: "Washington County, RI", color: "#3b6ea5", url: "/rhode-island", description: "Service Area – Washington County" },

    /* MASSACHUSETTS — Western Region */
    "25003": { name: "Berkshire County, MA", color: "#3b6ea5", url: "/massachusetts", description: "Service Area – Berkshire County" },
    "25011": { name: "Franklin County, MA", color: "#3b6ea5", url: "/massachusetts", description: "Service Area – Franklin County" },
    "25013": { name: "Hampden County, MA", color: "#3b6ea5", url: "/massachusetts", description: "Service Area – Hampden County" },
    "25015": { name: "Hampshire County, MA", color: "#3b6ea5", url: "/massachusetts", description: "Service Area – Hampshire County" },
    "25027": { name: "Worcester County, MA", color: "#3b6ea5", url: "/massachusetts", description: "Service Area – Worcester County" },

    /* VERMONT — Southern Two */
    "50003": { name: "Bennington County, VT", color: "#3b6ea5", url: "/vermont", description: "Service Area – Bennington County" },
    "50025": { name: "Windham County, VT", color: "#3b6ea5", url: "/vermont", description: "Service Area – Windham County" },

    /* NEW YORK — Eastern Up-to-Albany */
    "36001": { name: "Albany County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Albany County" },
    "36021": { name: "Columbia County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Columbia County" },
    "36027": { name: "Dutchess County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Dutchess County" },
    "36039": { name: "Greene County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Greene County" },
    "36071": { name: "Orange County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Orange County" },
    "36079": { name: "Putnam County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Putnam County" },
    "36083": { name: "Rensselaer County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Rensselaer County" },
    "36087": { name: "Rockland County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Rockland County" },
    "36111": { name: "Ulster County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Ulster County" },
    "36119": { name: "Westchester County, NY", color: "#3b6ea5", url: "/new-york", description: "Service Area – Westchester County" }
  },

  locations: {},
  labels: {},
  legend: { entries: [] }
};
