---
sidebar_position: 6
id: readwritephysettings-method-intrepidcs-api
---

# ReadWritePhySettings Method - intrepidcs API

This method allows reading and writing the PHY settings from/to the hardware.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoReadWritePHYSettings(void * hObject, PhyRegPkt_T *PHYSettings, size_t Size, size_t NumEntries);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoReadWritePHYSettings Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef PHYSettings As PhyRegPkt_T, ByVal iSize As IntPtr, ByVal NumEntries As IntPtr) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoReadWritePhySettings(IntPtr hObject, ref PhyRegPkt_T PHYSettings, IntPtr iSize, IntPtr NumEntries);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api).

PHYSettings

\[out] This is the address of the first element of an array of [PhyRegPkt\_T](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/phyregpktclausemess\_t-structure) structures. This array will be loaded by the application software with entries to be read or written from/to the hardware.

iSize

\[in] Specifies the size of the structure [PhyRegPkt\_T](../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/phyregpktclausemess\_t-structure) used by the application. This is to make sure the structure used in the application and the DLL is same to avoid any buffer overrun.

iNumEntries

\[in] Specifies the number of PHY Entries to be read or written.

**Return Values**

Returns 1 if successful, 0 if an error occurred. [GetLastAPIError](../error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api) must be called to obtain the specific error.

**Remarks**

This function call sends the PHY Entries to be read or written from/to the hardware.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
PhySettings.clause22.phyAddrOrPort = 0x6;
PhySettings.clause.regAddr = 0x2;
PhySettings.clause.pageOrDevice = 1;
PhySettings.WriteEnable = 0;
PhySettings.Enabled = 1; //if not enabled, this entry of read/write operation will be ignored even if it is passed in.
PhySettings.Clause45Enable = 0; //Set this to 1 if the application is sending Clause45 type of Entries.

icsneoReadWritePHYSettings(handle, &PhySettings, sizeof(PhyRegPkt_t), 1);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
Int32 iResult;
PhyRegPkt_t PhyRegPkt;
int iTempFlags = 0;

//Copy data to the structure
PhyRegPkt.ClausePkt.phyAddrOrPort = 6;
PhyRegPkt.ClausePkt.pageOrDevice = 1;
PhyRegPkt.ClausePkt.regAddr = 2;
PhyRegPkt.ClausePkt.regVal = 0;

//Set for Reading using Clause45 and Enabled
iTempFlags = iTempFlags | (int)PhyRegFlags.Enabled;
iTempFlags = iTempFlags | (int)PhyRegFlags.Clause45Enable;
PhyRegPkt.Flags = (ushort)iTempFlags;

//Get and cast the size of the structrue.
iResult = icsNeoDll.icsneoReadWritePHYSettings(m_hObject, ref PhyRegPkt, (IntPtr)System.Runtime.InteropServices.Marshal.SizeOf(PhyRegPkt), (IntPtr)1);
System.Diagnostics.Debug.WriteLine(Convert.ToString(PhyRegPkt.ClausePkt.regVal));
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim iResult As Int32
Dim PhyRegPkt As PhyRegPkt_t
Dim iTempFlags As Int32 = 0
Dim iParamCount As IntPtr = CType(1, IntPtr)

'//Copy data to the structure
PhyRegPkt.ClausePkt.phyAddrOrPort = 6
PhyRegPkt.ClausePkt.pageOrDevice = 1
PhyRegPkt.ClausePkt.regAddr = 3
PhyRegPkt.ClausePkt.regVal = 0

'//Set for Reading using Clause45 and Enabled
iTempFlags = iTempFlags Or PhyRegFlags.Enabled
iTempFlags = iTempFlags Or PhyRegFlags.Clause45Enable
PhyRegPkt.Flags = CUShort(iTempFlags)

'//Get and cast the size of the structrue.
Dim PhyRegSize As IntPtr = CType(System.Runtime.InteropServices.Marshal.SizeOf(PhyRegPkt), IntPtr)
iResult = icsneoReadWritePHYSettings(m_hObject, PhyRegPkt, PhyRegSize, iParamCount)
Debug.Print(CStr(PhyRegPkt.ClausePkt.regVal))
```
</TabItem>
</Tabs>
