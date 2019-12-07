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
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```
