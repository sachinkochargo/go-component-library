const essentialLinks = {
  tabs: [
    {
      key: "overview",
      link: "/overview/v2",
      label: "Overview",
      subTabs: null,
    },
    {
      key: "outbound",
      link: "/outbound",
      label: "OUTBOUND",
      subTabs: [
        {
          key: "listing",
          link: "/outbound/orders",
          label: "GTP Area",
        },
      ],
    },
    {
      key: "inbound",
      link: "/inbound",
      label: "Inbound",
      subTabs: null,
    },
    {
      key: "audit",
      link: "/audit",
      label: "AUDIT",
      subTabs: [
        {
          key: "listing",
          link: "/audit/audit",
          label: "GTP Listing",
        },
        {
          key: "itemSearch",
          link: "/audit/item-search",
          label: "Item Search",
        },
      ],
    },
    {
      key: "exception",
      link: "/exception",
      label: "Exception",
      subTabs: [
        {
          key: "listing",
          link: "/exception/listing",
          label: "GTP Listing",
        },
      ],
    },
    {
      key: "inventory",
      link: "/inventory",
      label: "inventory",
      subTabs: [
        {
          key: "listing",
          link: "/inventory/products",
          label: "GTP Listing",
        },
        {
          key: "reservedProducts",
          link: "/inventory/reserved-products",
          label: "Reserved Listing",
        },
        {
          key: "tagChange",
          link: "/inventory/tagChange",
          label: "Tag Change",
        },
        {
          key: "recall",
          link: "/inventory/recall",
          label: "Item Recall",
        },
        {
          key: "storage-storage",
          link: "/inventory/rack-utilisation",
          label: "Rack Utilisation",
        },
      ],
    },
    {
      key: "system",
      link: "/system",
      label: "System",
      subTabs: [
        {
          key: "overview",
          link: "/system/overview",
          label: "Overview",
        },
        {
          key: "zones",
          link: "/system/zones",
          label: "Overview",
        },
        {
          key: "pps",
          link: "/system/pps",
          label: "PPS",
        },
        {
          key: "pps-config",
          link: "/system/pps-config",
          label: "PPS Config",
        },
        {
          key: "msu-config",
          link: "/system/msu-config",
          label: "MSU Config",
        },
        {
          key: "station-management",
          link: "/system/station-management",
          label: "Station Management",
        },
        {
          key: "controllers",
          link: "/system/controllers",
          label: "Controllers",
        },
        {
          key: "hardware-status",
          link: "/system/hardware-status",
          label: "Hardware Status",
        },
      ],
    },
    {
      key: "users",
      link: "/users/v2",
      label: "Users",
      subTabs: [
        {
          key: "usersList",
          link: "/users/v2",
          label: "Users List",
        },
      ],
    },
    {
      key: "reports",
      link: "/reports",
      label: "REPORTS",
      subTabs: [
        {
          key: "operations-log",
          link: "/reports/operations-log",
          label: "Operations Log",
        },
        {
          key: "storage-space",
          link: "/reports/storage-space",
          label: "Storage Space",
        },
        {
          key: "misc",
          link: "/reports/misc",
          label: "Misc",
        },
      ],
    },
    {
      key: "notification",
      link: "/notification",
      label: "Notification",
      subTabs: null,
    },
  ],
  otherApps: [
    {
      key: "tower",
      link: "http://192.168.8.50:8087",
      label: "Tower",
      icon: "fas fa-broadcast-tower",
    },
    {
      key: "analyticalDashboard",
      link: "http://192.168.8.50:3002",
      label: "BI Dashboard",
      icon: "img:logos/grafana.png",
    },
  ],
  systemInfo: {
    homeUrl: "/overview",
    clientName: "client_unique_identifier_like:hnm-proj1",
    bffVersion: "2.4-5-g8af71e8",
    timezone: "UTC",
    matomoSiteId: "get_it_from_matomo",
    logoFileName: "default.png",
    isOpexBillingEnabled: false,
    ssoConfig: {
      url: "http://192.168.8.50:8180/auth",
      realm: "ButlerUI",
      clientId: "md-keycloak-app",
    },
    isSsoEnabled: true,
    reserveTagSupport: true,
    bulkOrderLimit: 100,
    isEulaEnabled: false,
  },
};
