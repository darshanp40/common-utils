# Aphrodite Vue components
-------------------------------------

NOTE : If any where image url is send as prod, Use Images url from S3

1. AphHeader

| Prop | Type | Default| Description |
| ------ | ------ | ------ | ------ |
| logoUrl | String |  | Logo Url to display |
| heading | String |  | Heading in bold to display |
| subHeading (Observable)| String |  | subHeading in light to display |
| userImage | String |  | User image to diaplay |
| userJid | String |  | User's JID to fetch user information |
| fixedTop | Boolean | false | Fix menu to top |
| type | String |  | is-black, is-primary any bulma color class for background |
| shadow | Boolean | false | Menu shadow |
| userNavigation | Object | {} | object with name and route ex: {name: 'logout', path: '/logout'} |



2. SessionLoader

| Prop | Type | Default| Description|
| ------ | ------ | ------ | ------ |
| logoUrl | String |  | Logo Url to display |
| logoSize | Number | 240 | Logo size |
| overlayColor | String | #2574f5 | Any overlay color |
| color | String | white | Color of message and loading menu |
| message | String | Renewing your session | Message to display |
| displayLoader | Boolean | true | Loader display option |



3. AppSidebar

```javascript
/* 
PROPS to the sidebar:
1. config - SIDEBAR_CONFIG = [
    {
        title: '', // Section Title - if you don't have the title then leave it blank
        separator: true, // to show the separator between two sections
        config: [
            {
                name: '', // Module name
                icon: '', // Module icon
                iconPack: 'mdi', // icon pack to be used - default is z-icon (Zeta's internal icons)
                path: '', // Absolute route path
                subItems: [
                    {
                        name: '', // Module name
                        icon: '', // Module icon
                        iconPack: 'mdi',
                        path: '', //absolute route path
                        subItems: [],
                    },
                ],
            }
        ],
    }
];
2. clickHandler - a custom click handler onto the menu-item
3. sidebarClass - a custom class to be applied on sidebar to have changes in CSS of the sidebar

SASS variables to be set:
$sidebar_width: 240px;
$sidebar_backgroud:#f2f2f2;
$sidebar_hov_bg: #ffffff;
$sidebar_color:#2a2a2a;
$sidebar_active_link: #0e64f0;

*/
```
