---
sidebar_position: 5
id: gethwfirmwareinfo-method-intrepidcs-api
---

# GetHWFirmwareInfo Method - intrepidcs API

This method returns the firmware version of the open neoVI device.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoGetHWFirmwareInfo(void * hObject, stAPIFirmwareInfo *pInfo);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoGetHWFirmwareInfo Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByRef pInfo As stAPIFirmwareInfo) As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoGetHWFirmwareInfo(intPtr hObject, ref stAPIFirmwareInfo pInfo);
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

This method returns the firmware version stored in the open neoVI device.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
stAPIFirmwareInfo FirmwareInfo;
int iResult;

iResult = icsneoGetHWFirmwareInfo(m_hObject, &FirmwareInfo);
if(iResult == 0)
{
    MessageBox::Show("Problem getting the neoVI's firmware information");
    return;
}
```
</TabItem>
<TabItem value="c#" label="C# Example">

```csharp
stAPIFirmwareInfo FirmwareInfo = new stAPIFirmwareInfo();
int iResult;

iResult = icsNeoDll.icsneoGetHWFirmwareInfo(m_hObject, ref FirmwareInfo);
if(iResult == 0)
{
    MessageBox.Show("Problem getting the neoVI's firmware information");
    return;
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim FirmwareInfo As stAPIFirmwareInfo
Dim iResult As Integer

iResult = icsneoGetHWFirmwareInfo(m_hObject, FirmwareInfo)
If iResult = 0 Then
    MsgBox("Problem getting the neoVI's firmware information")
    Exit Sub
End If
```
</TabItem>
</Tabs>
