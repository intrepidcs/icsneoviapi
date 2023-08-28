---
sidebar_position: 6
id: getdllfirmwareinfo-method-intrepidcs-api
---

# GetDLLFirmwareInfo Method - intrepidcs API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoGetDLLFirmwareInfo(void * hObject, stAPIFirmwareInfo *pInfo);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoGetDLLFirmwareInfo Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef pInfo As stAPIFirmwareInfo) As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoGetDLLFirmwareInfo(IntPtr hObject, ref stAPIFirmwareInfo pInfo);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api).

pInfo

\[out] Pointer to an [stAPIFirmwareInfo](../../structures-types-and-defines-overview-intrepidcs-api/setting-structures-overview-intrepidcs-api/stapifirmwareinfo-structure) structure.

**Return Values**

Returns 1 if successful, 0 if an error occurred.

**Remarks**

This method returns the version information for the neoVI firmware stored within the neoVI DLL API. This is the version that will be written to the neoVI device by the [ForceFirmwareUpdate](forcefirmwareupdate-method-intrepidcs-api) method.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
stAPIFirmwareInfo FirmwareInfo;
int iResult;

iResult = icsneoGetDLLFirmwareInfo(m_hObject, &FirmwareInfo);
if(iResult == 0)
{
    MessageBox::Show("Problem getting the version of the firmware stored within the DLL API");
    return;
}
```
</TabItem>
<TabItem value="c#" label="C# Example">

```csharp
stAPIFirmwareInfo FirmwareInfo = new stAPIFirmwareInfo();
int iResult;

iResult = icsNeoDll.icsneoGetDLLFirmwareInfo(m_hObject, ref FirmwareInfo);
if(iResult == 0)
{
    MessageBox.Show("Problem getting the version of the firmware stored within the DLL API");
    return;
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim FirmwareInfo As stAPIFirmwareInfo
Dim iResult As Integer

iResult = icsneoGetDLLFirmwareInfo(m_hObject, FirmwareInfo)
If iResult = 0 Then
    MsgBox("Problem getting the version of the firmware stored within the DLL API")
    Exit Sub
End If
```
</TabItem>
</Tabs>
