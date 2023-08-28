---
sidebar_position: 4
id: scriptclear-method-intrepidcs-api
---

# ScriptClear Method - intrepidcs API

This method clears a script from a specific location on a neoVI device.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoScriptClear(void * hObject, int iLocation);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoScriptClear Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByVal iLocation As Int32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern Int32 icsneoScriptClear(IntPtr hObject, Int32 iLocation);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Specifies the driver object created by [OpenNeoDevice](../../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api).

iLocation

\[in] Specifies the physical location of the script to be cleared on the neoVI device. Valid values are:

SCRIPT\_LOCATION\_FLASH\_MEM = 0 (Valid only on a neoVI Fire or neoVI Red) <br/>
SCRIPT\_LOCATION\_SDCARD = 1 (Valid only on a neoVI Fire or neoVI Red) <br/>
SCRIPT\_LOCATION\_VCAN3\_MEM = 4 (Valid only on a ValueCAN 3 device) <br/>

These values are defined in the icsnVC40.h file

**Return Values**

1 if the function succeeded. 0 if it failed for any reason. [GetLastAPIError](../../error-functions-overview-intrepidcs-api/getlastapierror-method-intrepidcs-api) must be called to obtain the specific error. The errors that can be generated by this function are:

NEOVI\_ERROR\_DLL\_NEOVI\_NO\_RESPONSE = 75 <br/>
NEOVI\_ERROR\_DLL\_INVALID\_SCRIPT\_LOCATION = 213 <br/>
NEOVI\_ERROR\_DLL\_SDCARD\_NOT\_INSERTED = 214 <br/>
NEOVI\_ERROR\_DLL\_SDCARD\_WRITE\_ERROR = 216 <br/>
NEOVI\_ERROR\_DLL\_SCRIPT\_ERROR\_CLEARING\_SCRIPT = 221

**Remarks**

If a script exists in the specified location it will be erased from that location. If the script is running it will be stopped. Any function blocks that are running will be stopped.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
int iRetVal;
unsigned long lLastErrNum;
//Clear the script from it's storage location.
//Both SCRIPT_LOCATION_FLASH_MEM and SCRIPT_LOCATION_SDCARD are persistent.
//On a ValueCAN 3, SCRIPT_LOCATION_VCAN3_MEM will clear when the device
//loses power or resets.

iRetVal = icsneoScriptClear(hObject, DefaultScriptLocation);
if(iRetVal == 0)
{
    printf("\nFailed to clear the script);
}
else
{
    printf("\nSuccessfully cleared the script");
}
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
Int32 iResult;

//clear CoreMini
iResult = icsNeoDll.icsneoScriptClear(m_hObject, Convert.ToInt32(CoreMiniStoreLocation.SCRIPT_LOCATION_FLASH_MEM));

if(iResult == 0)
{
    lblCMStatus.Text = "CoreMini Failed to Clear";
}
else
{
    lblCMStatus.Text = "CoreMini Cleared";
}
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim iResult As Int32

'//clear CoreMini
iResult = icsneoScriptClear(m_hObject, SCRIPT_LOCATION_FLASH_MEM)

If iResult = 0 Then
    lblCMStatus.Text = "CoreMini Failed to Clear"
Else
    lblCMStatus.Text = "CoreMini Cleared"
End If
```
</TabItem>
</Tabs>