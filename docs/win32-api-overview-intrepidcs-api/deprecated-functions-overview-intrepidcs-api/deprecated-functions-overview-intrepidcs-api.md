---
sidebar_position: 6
id: deprecated-functions-overview-intrepidcs-api
---

# Deprecated Functions Overview - intrepidcs API

| Name                                                            | Description                                                                       |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [OpenPortEx](openportex-method-intrepidcs-api)                  | Use OpenNeoDevice                                                                 |
| OpenPort                                                        | Use OpenNeoDevice                                                                 |
| [EnableNetworkCom](enablenetworkcom-method-intrepidcs-api)      | It is no longer necessary to call this before and after calling SendConfiguration |
| [FindAllUSBDevices](findallusbdevices-method-intrepidcs-api)    | No longer supported. It is present in the API but will always return 0            |
| [FindAllCOMDevices](findallcomdevices-method-intrepidcs-api)    | Use FindNeoDevices instead                                                        |
| [FindNeoDevices](findneodevices-method-intrepidcs-api)          | Use FindDevices instead                                                           |