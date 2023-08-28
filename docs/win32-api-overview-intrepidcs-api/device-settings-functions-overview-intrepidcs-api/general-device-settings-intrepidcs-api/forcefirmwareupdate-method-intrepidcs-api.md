---
sidebar_position: 7
id: forcefirmwareupdate-method-intrepidcs-api
---

# ForceFirmwareUpdate Method - intrepidcs API

This method forces the firmware on neoVI device to be updated.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
void _stdcall icsneoForceFirmwareUpdate(void * hObject);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoForceFirmwareUpdate Lib “icsneo40.dll” (ByVal hObject As IntPtr)
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern void icsneoForceFirmwareUpdate(IntPtr hObject);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api).

**Return Values**

None.

**Remarks**

This method is used to force the firmware on a neoVI device to be updated to the version stored in the DLL API.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
icsneoForceFirmwareUpdate(hObject);
```
</TabItem>
<TabItem value="c#" label="C# Example">

```csharp
icsNeoDll.icsneoForceFirmwareUpdate(m_hObject);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">
```vbnet
Call icsneoForceFirmwareUpdate(m_hObject)
```
</TabItem>
</Tabs>
