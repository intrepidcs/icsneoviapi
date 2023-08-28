---
sidebar_position: 4
id: findneodevices-method-intrepidcs-api
---

# FindNeoDevices Method - intrepidcs API

This method returns the neoVI hardware devices connected to the PC.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoFindNeoDevices(unsigned long DeviceTypes, NeoDevice *pNeoDevices, int *pNumberOfDevices);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoFindNeoDevices Lib “icsneo40.dll” (ByVal DeviceTypes As UInt32, ByRef pNeoDevice As NeoDevice, ByRef pNumDevices As Int32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoFindNeoDevices(UInt32 DeviceTypes, ref NeoDevice pNeoDevice, ref Int32 pNumDevices);
```
</TabItem>
</Tabs>

**Parameters**

DeviceTypes

\[in] Specifies the types of neoVI devices to find. Currently supported values are:

NEODEVICE\_BLUE = 0x00000001 <br/>
NEODEVICE\_ECU\_AVB = 0x00000002 <br/>
NEODEVICE\_DW\_VCAN = 0x00000004 <br/>
NEODEVICE\_RADGIGALOG = 0x00000006 <br/>
NEODEVICE\_FIRE = 0x00000008 <br/>
NEODEVICE\_VCAN3 = 0x00000010 <br/>
NEODEVICE\_RED = 0x00000040 <br/>
NEODEVICE\_ECU = 0x00000080 <br/>
NEODEVICE\_IEVB = 0x00000100 <br/>
NEODEVICE\_PENDANT = 0x00000200 <br/>
NEODEVICE\_OBD2\_PRO = 0x00000400 <br/>
NEODEVICE\_PLASMA = 0x00001000 <br/>
NEODEVICE\_CT\_OBD = 0x00008000 <br/>
NEODEVICE\_ION = 0x00040000 <br/>
NEODEVICE\_RADSTAR = 0x00080000 <br/>
NEODEVICE\_VCAN44 = 0x00200000 <br/>
NEODEVICE\_VCAN42 = 0x00400000 <br/>
NEODEVICE\_CMPROBE = 0x00800000 <br/>
NEODEVICE\_EEVB = 0x01000000 <br/>
NEODEVICE\_VCANRF = 0x02000000 <br/>
NEODEVICE\_FIRE2 = 0x04000000 <br/>
NEODEVICE\_FLEX = 0x08000000 <br/>
NEODEVICE\_RADGALAXY = 0x10000000 <br/>
NEODEVICE\_RADSTAR2 = 0x20000000 <br/>
NEODEVICE\_VIVIDCAN = 0x40000000 <br/>
NEODEVICE\_OBD2\_SIM = 0x80000000 <br/>
NEODEVICE\_ALL = = 0xFFFFBFFF <br/>

Constants are defined in appropriate header or module. You may use logical OR to choose which devices to look for or use NEODEVICE\_ALL to specify all devices.

pNeoDevices \[out] This is the address of the first element of an array of [NeoDevice](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/neodevice-structure) structure. This array can be as big as 255 devices. You must specify the size of the pNeoDevices array in the pNumberOfDevices parameter. The number of devices found will be limited to the value of pNumberofDevices or 255, whichever is lower. Each returned NeoDevice structure will contain information for each device such as its type, device ‘handle’ and serial number.

pNumberOfDevices\[in/out] In: Specifies the size of the pNeoDevices array. Must be in the range 0 to 255.

Out: Specifies the number of neo devices that were found. This can be in the range 0 to 255.

**Return Values**

1 if the function succeeded. 0 if it failed for any reason. If the function succeeds but no devices are found 1 will still be returned and pNumberOfDevices will equal 0.

**Remarks**

The NeoDevice array elements that are returned with this function may be passed to [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api) so that individual neoVI devices can be opened.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
NeoDevice Devices[255];
unsigned long lDevTypes;
int iNumDevices = 255;
int iRetVal = 0;
int lDevTypes;

lDevTypes = NEODEVICE_ALL;

iRetVal = icsneoFindNeoDevices(lDevTypes, Devices, &iNumDevices);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
int iResult;//Holds the results from function call
NeoDevice ndNeoToOpen = new NeoDevice(); ; //Struct holding detected hardware information
int iNumberOfDevices; //Number of hardware devices to look for
int lDevTypes; //Holds the device types to look for
lDevTypes = NEODEVICE_ALL;

//Set the number of devices to find
iNumberOfDevices = 1;
//Search for connected hardware
iResult = icsNeoDll.icsneoFindNeoDevices(65535, ref ndNeoToOpen, ref iNumberOfDevices);
if (iResult == 0)
{
    MessageBox.Show("Problem finding devices");
    return;
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim iResult As Integer '//Holds the results from function call
Dim ndNeoToOpen As NeoDevice '//Struct holding detected hardware information
Dim iNumberOfDevices As Integer '//Number of hardware devices to look for
Dim lDevTypes As Integer '//Holds the device types to look for


'//Set the devices to look for
lDevTypes = NEODEVICE_ALL
'//Set the number of devices to find
iNumberOfDevices = 1
'//Search for connected hardware
iResult = icsneoFindNeoDevices(lDevTypes, ndNeoToOpen, iNumberOfDevices)
If (iResult = 0) Then MsgBox("Problem finding devices")
```
</TabItem>
</Tabs>
