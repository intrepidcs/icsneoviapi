---
sidebar_position: 15
id: neodevice-structure
---

# NeoDevice Structure

A structure used by [FindNeoDevices](../../deprecated-functions-overview-intrepidcs-api/findneodevices-method-intrepidcs-api) and [OpenNeoDevice](../../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api) to locate and open neoVI devices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct
{
    unsigned long DeviceType;
    int Handle;
    int NumberOfClients;
    int SerialNumber;
    int MaxAllowedClients;
}NeoDevice;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
'//Structure for neoVI device types
Public Structure NeoDevice
    Dim DeviceType As Int32
    Dim Handle As Int32
    Dim NumberOfClients As Int32
    Dim SerialNumber As Int32
    Dim MaxAllowedClients As Int32
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential)]
public struct NeoDevice
{
    public Int32 DeviceType;
    public Int32 Handle;
    public Int32 NumberOfClients;
    public Int32 SerialNumber;
    public Int32 MaxAllowedClients;
}
```
</TabItem>
</Tabs>

**Remarks**

Instances of this structure are initialized and set by calling [FindNeoDevices](../../deprecated-functions-overview-intrepidcs-api/findneodevices-method-intrepidcs-api). Then the structure is used by [OpenNeoDevice](../../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api) to make a physical connection to a neoVI device.

| Item            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DeviceType      | <p>A bit-wise field that indicates the type of neoVI device that the structure represents. The currently supported types are :</p> NEODEVICE_BLUE = 1<br/>NEODEVICE_DW_VCAN = 4<br/>NEODEVICE_VCAN41 = 7<br/>NEODEVICE_FIRE = 8<br/>NEODEVICE_VCAN3 = 16<br/>NEODEVICE_RED = 64<br/>NEODEVICE_ECU = 128<br/>NEODEVICE_IEVB = 256<br/>NEODEVICE_PENDANT = 512<br/>NEODEVICE_PLASMA = &H31000<br/>NEODEVICE_FIRE_VNET = &H2000<br/>NEODEVICE_NEOANALOG = &H4000<br/>NEODEVICE_ION = &H140000<br/>NEODEVICE_VCANFD = &H200000<br/>NEODEVICE_VCAN42 = &H400000<br/>NEODEVICE_EEVB = &H1000000<br/>NEODEVICE_VCANRF = &H2000000<br/>NEODEVICE_FIRE2 = &H4000000<br/>NEODEVICE_FLEX = &H8000000<br/>NEODEVICE_RADGALAXY = &H10000000<br/>NEODEVICE_RADSTAR2 = &H20000000<br/>NEODEVICE_OBD2_SIM = &H80000000<br/>NEODEVICE_ALL = &HFFFFBFFF<br/>    |
| Handle          | The device handle used by the API for opening a neoVI device                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                
| NumberOfClients | Reserved for future use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                
| SerialNumber    | Serial number of the neoVI device                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                
| MaxAllowClients | Reserved for future use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                
