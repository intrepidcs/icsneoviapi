---
sidebar_position: 10
id: setreflashdisplaycallbacks-method-intrepidcs-api
---

# SetReflashDisplayCallbacks Method - neoVI API

**This method is used to set ‘call back’ functions that will be called by the neoVI API when flashing a neoVI device with the** [**ForceFirmwareUpdate**](forcefirmwareupdate-method-intrepidcs-api) **function. This overrides the Windows dialog box that normally displays the progress of a neoVI flash update. The use of call back functions allows the client application to receive the status messages and display them as desired.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoSetReflashDisplayCallbacks(void (*OnPrompt)(unsigned long), void (*OnReflashUpdate)(const wchar_t *, unsigned long));
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
```
</TabItem>
</Tabs>

**Parameters**

<span style={{color:"#C45508"}}>void (\*OnPrompt)(unsigned long)</span>

\[in] Specifies a function pointer that will be called when a message must be displayed instructing the user to disconnect and then re-connect the neoVI from the USZB port. The function receives an unsigned long that will contain the serial number of the neoVI device being flash updated. Before returning from this function call the user of the client application must be prompted to unplug the neoVI from the USB port and then re-connect it before continuing. This is to put the USB chip in the neoVI into bootloader mode so that flashing can begin. This function will not be called when flashing a ValueCAN3 device.

<span style={{color:"#C45508"}}>void (\*OnReflashUpdate)(const wchar\_t \*, unsigned long)</span>

\[in] Specifies a function pointer that will be called when a flashing status message is ready to be displayed. The function recieves a pointer to a wide character string that contains the status message to display. It also receives an unsigned long that contains the percentage complete for the current chip being flashed. The percentage value will reset to 0 for each new chip. For example, the neoVI Fire has four chips to flash while the ValueCAN3 has only two.

**Return Values**

1 if successful, 0 if either function pointer is NULL.

**Remarks**

After calling this function you must call the [ForceFirmwareUpdate](forcefirmwareupdate-method-intrepidcs-api) function to cause the neoVI device firmware to be updated. Once the callbacks have been set they are valid and active until the the DLL is unloaded or until the [ClearReflashDisplayCallbacks](clearreflashdisplaycallbacks-method-intrepidcs-api) function is called.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
```

</TabItem>
<TabItem value="c#" label="C# Example">

```csharp
```
</TabItem>
<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
```
</TabItem>
</Tabs>
