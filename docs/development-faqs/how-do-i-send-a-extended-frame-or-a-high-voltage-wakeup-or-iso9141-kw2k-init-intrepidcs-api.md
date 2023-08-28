---
sidebar_position: 5
id: how-do-i-send-a-extended-frame-or-a-high-voltage-wakeup-or-iso9141-kw2k-init-intrepidcs-api
---

# How do I send a Extended Frame or a High Voltage Wakeup or ISO9141/KW2K Init? - intrepidcs API

Regardless if you are trying to send an Extended Frame, High Voltage Wakeup, orISO9141/KW2K init, the key is the [Status Bitfield](../win32-api-overview-intrepidcs-api/structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/status-bitfields-neovi-api). The [Status Bitfield](../win32-api-overview-intrepidcs-api/structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/status-bitfields-neovi-api) holds extra information for the message. Each bit of this parameter is a toggle for a different parameter. To send a High Voltage Wakeup, you would set the `SPY_STATUS2_HIGH_VOLTAG`E bit for your message. For an extended address you would set the `SPY_STATUS_XTD_FRAME` for the message you want to have an extended address. `SPY_STATUS_INIT_MESSAGE` is set to send an Initialization waveform with a ISO9141 or Keyword 2000 message.
