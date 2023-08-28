---
sidebar_position: 3
id: how-do-i-open-more-than-one-channel-on-a-single-piece-of-hardware-intrepidcs-api
---

# How do I open more than one channel on a single piece of hardware? - intrepidcs API

When calling [OpenNeoDevice](../win32-api-overview-intrepidcs-api/basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api) or [OpenPortEx](../win32-api-overview-intrepidcs-api/deprecated-functions-overview-intrepidcs-api/openportex-method-intrepidcs-api) to connect to the device, all the enabled channels on the device are active. Nothing special needs to be done "open" another channel. Calling [GetMessages](../win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/getmessages-method-intrepidcs-api) will get messages on all enabled channels. Looking at the [NetworkID](../win32-api-overview-intrepidcs-api/structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/message-structures-neovi-api) in the message structure for that message, the channel the message occurred on can be determined. When transmitting a message using [TxMessage](../win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/txmessages-method-intrepidcs-api), the third parameter is the [Network ID](../win32-api-overview-intrepidcs-api/structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/neovi-network-id-list) to send the message out on.
