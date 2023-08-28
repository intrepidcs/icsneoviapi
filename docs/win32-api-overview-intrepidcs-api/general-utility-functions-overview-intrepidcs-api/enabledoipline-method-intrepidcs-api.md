---
sidebar_position: 7
id: enabledoipline-method-intrepidcs-api
---

# EnableDOIPLine Method - intrepidcs API

This method enables or disables the Ethernet activation line on supported hardware devices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoEnableDOIPLine(void* hObject, bool bActivate);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoEnableDOIPLine Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByVal bActivate As Boolean) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoEnableDOIPLine(IntPtr hObject, bool bActivate);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api)

bActivate

\[in] Specifies the state of the Activation line. True enables the activation and False disabled it.

**Return Values**

1 if the function succeeded. 0 if it failed for any reason. [GetLastAPIError](../error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api) must be called to obtain the specific error.

**Remarks**

The specified hardware must support a DoIP activation line

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
int iRetVal;
bool bState;

bState = true;
iRetVal = icsneoEnableDOIPLine(hObject,bState);
if(iRetVal == 0)
{
    printf("\nFailed to set DoIP Act");
}
else
{
    printf("\nSuccessfully set DoIP Act");
}

```
</TabItem>

<TabItem value="c#" label="C# Example">

```vbnet
int iResult;
bool bState;

//Set the bit rate
iResult = icsNeoDll.icsneoEnableDOIPLine(m_hObject,bState);
if (iResult == 0)
{
    MessageBox.Show("Problem setting DoIP Act");
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```csharp
Dim iResult As Integer
Dim bState As Boolean
'//Set the bit rate
iResult = icsneoEnableDOIPLine(m_hObject,bState)
If (iResult = 0) Then MsgBox("Problem setting DoIP Act")
```
</TabItem>
</Tabs>
