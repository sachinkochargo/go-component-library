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
export const otherAppsLinks = [
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
];
export const tableStatsData = [
  {
    key: "total",
    name: "Total",
    value: "110",
  },
  {
    key: "in_progress",
    name: "In Progress",
    value: "50",
  },
  {
    key: "completed",
    name: "Completed",
    value: "25",
  },
  {
    key: "rejected",
    name: "Rejected",
    value: "25",
  },
];


export const dropDownButtonData = [
  {
    key: "element1",
    name: "Element1",
  },
  {
    key: "element2",
    name: "Element2",
  },
  {
    key: "element3",
    name: "Element3",
  },
];

export const AUTH_MENU_ITEMS = [
  {
    link: "/profile",
    title: "Profile",
    icon: "get_app",
  },
  {
    link: "/logout",
    title: "Logout",
    icon: "login",
  },
];

export const TABLE_COLS = [
  {
    name: "externalServiceRequestId",
    required: true,
    label: "Order info",
    align: "left",
    field: (row) => row.externalServiceRequestId,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Station Info",
    field: (row) => `${row.attributes.ppsId.length > 0 ? row.attributes.ppsId[0] : `--`} (Bins:${row.attributes.ppsBinId})`,
    sortable: false,
  },
  { name: "fat", label: "Fulfillment Window", field: "fat", sortable: false },
  { name: "orderProgress.progressLabel", label: "Status", field: (row) => row.orderProgress.progressLabel },
  { name: "protein", label: "Actions", field: "protein" },
];

export const TABLE_ROW = [
  {
     "id":1373,
     "type":"PICK",
     "externalServiceRequestId":"my_10th_order",
     "status":"PROCESSED",
     "state":"released",
     "businessState":"Released",
     "createdOn":"13th Jan 2022 | 2:11 pm",
     "updatedOn":"13th Jan 2022 | 2:12 pm",
     "level":"Master Order",
     "parentAttributes":null,
     "srProductsCounts":{
        "exceptions":0,
        "actuals":4,
        "expectations":4
     },
     "attributes":{
        "orderType":"--",
        "simplePriority":"normal",
        "has_parent":false,
        "ppsId":[
           "4"
        ],
        "ppsBinId":"9",
        "userName":"admin",
        "route":"--",
        "shipment":"--",
        "pickBeforeTime":"--",
        "pickAfterTime":"--",
        "allocationTime":"--",
        "startTime":"--",
        "completionTime":"13th Jan 2022 | 2:12 pm",
        "orderOptions":{
           "bintags":null
        },
        "noOfOrders":2,
        "binTagsStr":"--",
        "executionTime":"--",
        "carryingUnits":[
           
        ]
     },
     "orderProgress":{
        "progressPercent":100,
        "progressLabel":"4/4"
     },
     "canCancel":false,
     "canChangePAT":false,
     "canChangePBT":false,
     "canChangePriority":false
  },
  {
     "id":1366,
     "type":"PICK",
     "externalServiceRequestId":"my_6th_order5",
     "status":"PROCESSED",
     "state":"released",
     "businessState":"Completed - Short Picked",
     "createdOn":"10th Jan 2022 | 9:38 am",
     "updatedOn":"10th Jan 2022 | 12:51 pm",
     "level":"Master Order",
     "parentAttributes":null,
     "srProductsCounts":{
        "exceptions":0,
        "actuals":7,
        "expectations":10
     },
     "attributes":{
        "orderType":"--",
        "simplePriority":"normal",
        "has_parent":false,
        "ppsId":[
           "4"
        ],
        "ppsBinId":"9",
        "userName":"admin",
        "route":"--",
        "shipment":"--",
        "pickBeforeTime":"--",
        "pickAfterTime":"--",
        "allocationTime":"--",
        "startTime":"--",
        "completionTime":"10th Jan 2022 | 9:39 am",
        "orderOptions":{
           "bintags":null
        },
        "noOfOrders":1,
        "binTagsStr":"--",
        "executionTime":"--",
        "carryingUnits":[
           
        ]
     },
     "orderProgress":{
        "progressPercent":70,
        "progressLabel":"7/10"
     },
     "canCancel":false,
     "canChangePAT":false,
     "canChangePBT":false,
     "canChangePriority":false
  },
  {
     "id":1363,
     "type":"PICK",
     "externalServiceRequestId":"my_6th_order4",
     "status":"FAILED",
     "state":"not_fulfillable",
     "businessState":"Unfulfillable",
     "createdOn":"10th Jan 2022 | 9:37 am",
     "updatedOn":"10th Jan 2022 | 9:37 am",
     "level":"Master Order",
     "parentAttributes":null,
     "srProductsCounts":{
        "exceptions":0,
        "actuals":0,
        "expectations":15
     },
     "attributes":{
        "orderType":"--",
        "simplePriority":"normal",
        "has_parent":false,
        "ppsId":[
           
        ],
        "ppsBinId":"",
        "userName":"--",
        "route":"--",
        "shipment":"--",
        "pickBeforeTime":"--",
        "pickAfterTime":"--",
        "allocationTime":"--",
        "startTime":"--",
        "completionTime":"--",
        "orderOptions":{
           "bintags":null
        },
        "noOfOrders":1,
        "binTagsStr":"--",
        "executionTime":"--",
        "carryingUnits":[
           
        ]
     },
     "orderProgress":{
        "progressPercent":0,
        "progressLabel":"0/15"
     },
     "canCancel":false,
     "canChangePAT":false,
     "canChangePBT":false,
     "canChangePriority":false
  },
  {
     "id":1359,
     "type":"PICK",
     "externalServiceRequestId":"my_9th_order",
     "status":"PROCESSED",
     "state":"released",
     "businessState":"Completed - Short Picked",
     "createdOn":"10th Jan 2022 | 8:36 am",
     "updatedOn":"10th Jan 2022 | 8:40 am",
     "level":"Master Order",
     "parentAttributes":null,
     "srProductsCounts":{
        "exceptions":1,
        "actuals":2,
        "expectations":3
     },
     "attributes":{
        "orderType":"--",
        "simplePriority":"normal",
        "has_parent":false,
        "ppsId":[
           "4"
        ],
        "ppsBinId":"9",
        "userName":"admin",
        "route":"--",
        "shipment":"--",
        "pickBeforeTime":"--",
        "pickAfterTime":"--",
        "allocationTime":"--",
        "startTime":"--",
        "completionTime":"10th Jan 2022 | 8:40 am",
        "orderOptions":{
           "bintags":null
        },
        "noOfOrders":2,
        "binTagsStr":"--",
        "executionTime":"--",
        "carryingUnits":[
           
        ]
     },
     "orderProgress":{
        "progressPercent":66,
        "progressLabel":"2/3"
     },
     "canCancel":false,
     "canChangePAT":false,
     "canChangePBT":false,
     "canChangePriority":false
  },
  {
     "id":1356,
     "type":"PICK",
     "externalServiceRequestId":"my_6th_order3",
     "status":"PROCESSED",
     "state":"released",
     "businessState":"Completed - Short Picked",
     "createdOn":"10th Jan 2022 | 8:30 am",
     "updatedOn":"10th Jan 2022 | 8:31 am",
     "level":"Master Order",
     "parentAttributes":null,
     "srProductsCounts":{
        "exceptions":1,
        "actuals":1,
        "expectations":2
     },
     "attributes":{
        "orderType":"--",
        "simplePriority":"normal",
        "has_parent":false,
        "ppsId":[
           "4"
        ],
        "ppsBinId":"9",
        "userName":"admin",
        "route":"--",
        "shipment":"--",
        "pickBeforeTime":"--",
        "pickAfterTime":"--",
        "allocationTime":"--",
        "startTime":"--",
        "completionTime":"10th Jan 2022 | 8:31 am",
        "orderOptions":{
           "bintags":null
        },
        "noOfOrders":1,
        "binTagsStr":"--",
        "executionTime":"--",
        "carryingUnits":[
           
        ]
     },
     "orderProgress":{
        "progressPercent":50,
        "progressLabel":"1/2"
     },
     "canCancel":false,
     "canChangePAT":false,
     "canChangePBT":false,
     "canChangePriority":false
  }
]