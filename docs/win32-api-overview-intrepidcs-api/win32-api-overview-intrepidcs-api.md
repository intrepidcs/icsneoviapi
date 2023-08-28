---
sidebar_position: 3
id: win32-api-overview-intrepidcs-api
---

# WIN32 API Overview - neoVI API

**Basic Operations**

| Name                                                                                            | Description                                                                 |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [FindDevices](basic-functions-overview-intrepidcs-api/finddevices-method)                       | Used to locate connected neoVI and ValueCAN devices.                        |
| [OpenNeoDevice](basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api)    | Used to open a communication link with a specific neoVI or ValueCAN device. |
| [ClosePort](basic-functions-overview-intrepidcs-api/closeport-method-intrepidcs-api)            | Closes the communication link with the neoVI device.                        |
| [FreeObject](basic-functions-overview-intrepidcs-api/freeobject-method-intrepidcs-api)          | Releases system resources used by the neoVI device.                         |

**Message Functions**

| Name                                                                                                                                                                                                                             | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [GetMessages](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/getmessages-method-intrepidcs-api)                                                                                                    | Reads messages from the neoVI or ValueCAN device.                                                                          |
| [TxMessages](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/txmessages-method-intrepidcs-api)                                                                                                      | Transmits messages to vehicle networks using a neoVI or ValueCAN device.                                                   |
| [TxMessagesEx](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/txmessagesex-method-intrepidcs-api)                                                                                                  | Transmits messages longer than 8 bytes to vehicle networks using a neoVI or ValueCAN device. Used with Ethernet and CAN FD |
| [WaitForRxMessagesWithTimeOut](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/waitforrxmessageswithtimeout-method-intrepidcs-api)                                                                  | Waits a specified amount of time in milliseconds for a received message                                                    |
| [GetTimeStampForMSG](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/gettimestampformsg-method-intrepidcs-api)                                                                                      | Calculates the timestamp for a message given the handle to the device and a Message Structure                              |
| [ISO15765EnableNetworks](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/iso15765-message-functions-overview-intrepidcs-api/iso15765_enablenetworks-method-intrepidcs-api)                          | Enables ISO15765 for the selective CAN/CANFD network                                                                       |
| [ISO15765TxMessage](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/iso15765-message-functions-overview-intrepidcs-api/iso15765_transmitmessage-method-intrepidcs-api)                              | Configures an outgoing ISO15765 transaction                                                                                |
| [ICS15765RxMessage](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/iso15765-message-functions-overview-intrepidcs-api/iso15765_receivemessage-method-intrepidcs-api)                               | Configures the hardware to listen for a ISO15765 transaction                                                               |
| [Transmitting Long Messages](/win32-api-overview-intrepidcs-api/message-functions-overview-intrepidcs-api/transmitting-long-messages-intrepidcs-api)                                                                             | In formation on sending longer frames on ISO9171 and Keyword 2000 networks                                                 |

**Device Settings Functions**

| Name                                                                                                                                                                           | Description                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [GetConfiguration](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/getconfiguration-method-intrepidcs-api)                                                                  | Reads the configuration bytes for a neoVI Blue or ValueCAN device           |
| [SendConfiguration](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/sendconfiguration-method-intrepidcs-api)                                                                | Sends configuration bytes to a neoVI Blue or ValueCAN device                |
| [GetFireSettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/neovi-fire-intrepidcs-api/getfiresettings-method-intrepidcs-api)                                           | Gets device and network parameters for a neoVI Fire device                  |
| [SetFireSettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/neovi-fire-intrepidcs-api/setfiresettings-method-intrepidcs-api)                                           | Sets device and network parameters for a neoVI Fire device                  |
| [GetFIRE2Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/neovi-fire-2-intrepidcs-api/getfire2settings-method-intrepidcs-api)                                       | Gets device and network parameters for a neoVI Fire 2 device                |
| [SetFIRE2Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/neovi-fire-2-intrepidcs-api/setfire2settings-method-intrepidcs-api)                                       | Sets device and network parameters for a neoVI Fire 2 device                |
| [GetVCAN3Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan3-intrepidcs-api/getvcan3settings-method-intrepidcs-api)                                          | Gets device and network parameters for a ValueCAN3 device                   |
| [SetVCAN3Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan3-intrepidcs-api/setvcan3settings-method-intrepidcs-api)                                          | Sets device and network parameters for a ValueCAN3 device                   |
| [GetVCAN412Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan-4-1-and-4-2-intrepidcs-api/getvcan412settings-method-intrepidcs-api)                           | Gets device and network parameters for a ValueCAN4-1 and ValueCAN4-2 device |
| [SetVCAN412Settings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan-4-1-and-4-2-intrepidcs-api/setvcan412settings-method-intrepidcs-api)                           | Sets device and network parameters for a ValueCAN4-1 and ValueCAN4-2 device |
| [GetVCANRFSettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan-rf-intrepidcs-api/getvcanrfsettings-method-intrepidcs-api)                                      | Gets device and network parameters for a ValueCAN RF device                 |
| [SetVCANRFSettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/valuecan-rf-intrepidcs-api/setvcanrfsettings-method-intrepidcs-api)                                      | Sets device and network parameters for a ValueCAN RF device                 |
| [GetRADGalaxySettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/rad-galaxy-intrepidcs-api/getradgalaxysettings-method-intrepidcs-api)                                 | Gets device and network parameters for a RAD Galaxy device                  |
| [SetRADGalaxySettings](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/rad-galaxy-intrepidcs-api/setradgalaxysettings-method-intrepidcs-api)                                 | Sets device and network parameters for a RAD Galaxy device                  |
| [SetBitRate](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/setbitrate-method-intrepidcs-api)                                        | Set the baud or bit rate for a specific neoVI network                       |
| [GetHWFirmwareInfo](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/gethwfirmwareinfo-method-intrepidcs-api)                          | Gets the firmware version of a neoVI device                                 |
| [GetDLLFirmwareInfo](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/getdllfirmwareinfo-method-intrepidcs-api)                        | Gets the firmware version stored in the DLL API                             |
| [ForceFirmwareUpdate](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/forcefirmwareupdate-method-intrepidcs-api)                      | Forces the firmware to updated on a neoVI device                            |
| [GetDeviceParameters](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/getdeviceparameters-method-intrepidcs-api)                      | Gets individual parameters for a neoVI device                               |
| [SetDeviceParameters](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/setdeviceparameters-method-intrepidcs-api)                      | Sets individual parameters for a neoVI device                               |
| [SetReflashDisplayCallbacks](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/setreflashdisplaycallbacks-method-intrepidcs-api)        | Sets callback function pointers for flashing a neoVI                        |
| [ClearReflashDisplayCallbacks](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/clearreflashdisplaycallbacks-method-intrepidcs-api)    | Clears callback function pointers for flashing a neoVI                      |
| [GetRTC](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/getrtc-method-intrepidcs-api)                                                | Gets the current real-time clock value from a connect neoVI device          |
| [SetRTC](/win32-api-overview-intrepidcs-api/device-settings-functions-overview-intrepidcs-api/general-device-settings-intrepidcs-api/setrtc-method-intrepidcs-api)                                                | Sets the current real-time clock value in a connected neoVI device          |

**Error Functions**

| Name                                                                                                  | Description                                                 |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [GetLastAPIError](error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api)      | Returns the error generated by the last intrepidcs API call |
| [GetErrorMessages](error-functions-overview-intrepidcs-api/geterrormessages-method-intrepidcs-api)    | Returns the intrepidcs API error message queue              |
| [GetErrorInfo](error-functions-overview-intrepidcs-api/geterrorinfo-method-intrepidcs-api)            | Returns a text description of an intrepidcs API error       |

**General Utility Functions**

| Name                                                                                                                            | Description                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [ValidateHObject](general-utility-functions-overview-intrepidcs-api/validatehobject-method-intrepidcs-api)                      | Used to determine if an hObject reference is valid     |
| [GetDLLVersion](general-utility-functions-overview-intrepidcs-api/getdllversion-method-intrepidcs-api)                          | Returns DLL version information                        |
| [StartSockServer](general-utility-functions-overview-intrepidcs-api/startsocketserver-method-intrepidcs-api)                    | Starts the TCP/IP socket server at a specified port.   |
| [StopSockServer](general-utility-functions-overview-intrepidcs-api/stopsocketserver-method-intrepidcs-api)                      | Stops the TCP/IP socket server                         |
| [GetPerformanceParameters](general-utility-functions-overview-intrepidcs-api/getperformanceparameters-method-intrepidcs-api)    | Returns information on performance of dll and hardware |

#### CoreMini Functions

| Function                                                                                                                                                               | Description                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [ScriptStart](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptstart-method-intrepidcs-api)                        | Starts execution of a script that has been downloaded to a neoVI device                             |
| [ScriptStop](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptstop-method-intrepidcs-api)                          | Stops execution of a script running on a neoVI device                                               |
| [ScriptLoad](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptload-method-intrepidcs-api)                          | Downloads a script to a connected neoVI device into a specified location                            |
| [ScriptClear](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptclear-method-intrepidcs-api)                        | Clears a script from a specific location on a neoVI device                                          |
| [ScriptStartFBlock](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptstartfblock-method-intrepidcs-api)            | Starts a function block within a script on a neoVI device                                           |
| [ScriptGetFBlockStatus](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptgetfblockstatus-method-intrepidcs-api)    | Returns the run status of a function block within a script on a neoVI device                        |
| [ScriptStopFBlock](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptstopfblock-method-intrepidcs-api)              | Stops the execution of a function block within a script on a neoVI device                           |
| [ScriptGetScriptStatus](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptgetscriptstatus-method-intrepidcs-api)    | Stops the execution of a function block within a script on a neoVI device                           |
| [ScriptReadAppSignal](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptreadappsignal-method-intrepidcs-api)        | Read an application signal from a script running on a neoVI device                                  |
| [ScriptWriteAppSignal](deprecated-functions-overview-intrepidcs-api/coremini-script-interface-overview-intrepidcs-api/scriptwriteappsignal-method-intrepidcs-api)      | Set the value of an application signal in a script running on a neoVI device                        |
| ScriptReadISO15765TxMessage                                                                                                                                            | Read parameters of an ISO15765-2 long transmit message in a script on a neoVI device                |
| ScriptWriteISO15765TxMessage                                                                                                                                           | Change the parameters for an ISO15765-2 long transmit message defined in a script on a neoVI device |

#### Deprecated Functions

| Name                                                                                                         | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [OpenPortEx](deprecated-functions-overview-intrepidcs-api/openportex-method-intrepidcs-api)                  | Use [OpenNeoDevice](basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api) instead |
| OpenPort                                                                                                     | Use [OpenNeoDevice ](basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api)instead |
| [EnableNetworkCom](deprecated-functions-overview-intrepidcs-api/enablenetworkcom-method-intrepidcs-api)      | It is no longer necessary to call this before and after calling SendConfiguration                           |
| [FindAllUSBDevices](deprecated-functions-overview-intrepidcs-api/findallusbdevices-method-intrepidcs-api)    | No longer supported. It is present in the API but will always return 0                                      |
| ScriptReadRxMessage                                                                                          | Reads parameters for a receive message defined in a script on a neoVI device                                |
| ScriptReadTxMessage                                                                                          | Reads parameters for a transmit message defined within a script on a neoVI device                           |
| ScriptWriteRxMessage                                                                                         | Alter a receive message defined within script on a neoVI device                                             |
| ScriptWriteTxMessage                                                                                         | Alter a transmit message defined within a script on a neoVI device                                          |


<!-- [Home](/intro.md). -->