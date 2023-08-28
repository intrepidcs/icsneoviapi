---
sidebar_position: 1
id: validatehobject-method-intrepidcs-api
---

# ValidateHObject Method - intrepidcs API

This method is used to determine if a driver object is valid.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoValidateHObject(void * hObject);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoValidateHObject Lib “icsneo40.dll” (ByVal hObject As IntPtr) As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoValidateHObject(IntPtr hObject);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api).

**Return Values**

1 if the hObject is valid. 0 if the object is invalid.

**Remarks**

A driver object will be invalid if it was never initialized by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api). Calling [ClosePort ](../basic-functions-overview-intrepidcs-api/closeport-method-intrepidcs-api)will not invalidate a driver object; only [FreeObject](../basic-functions-overview-intrepidcs-api/freeobject-method-intrepidcs-api) will do so.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
if(Convert::ToBoolean(icsneoValidateHObject(m_hObject)))
{
    cmdCheckHardwareHandle->Text = "Good";
}
else
{
    cmdCheckHardwareHandle->Text = "Lost";
}
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
if (Convert.ToBoolean (icsNeoDll.icsneoValidateHObject(m_hObject)))
{
    cmdCheckHardwareHandle.Text = "Good";
}
else
{
    cmdCheckHardwareHandle.Text = "Lost";
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
If (CBool(icsneoValidateHObject(m_hObject))) Then
    cmdCheckHardwareHandle.Text = "Good"
Else
    cmdCheckHardwareHandle.Text = "Lost"
End If
```
</TabItem>
</Tabs>