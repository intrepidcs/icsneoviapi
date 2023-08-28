---
sidebar_position: 16
id: timesync_icshardware_settings-structure
---

# TIMESYNC_ICSHARDWARE_SETTINGS Structure

**Structure defining the parameters for Time Sync**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec (align(2))
{
   uint8_t MasterEnable;
   uint8_t SlaveEnable;
   uint8_t MasterNetwork;
   uint8_t SlaveNetwork;
}TIMESYNC_ICSHARDWARE_SETTINGS;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=2)> Public Structure TIMESYNC_ICSHARDWARE_SETTINGS
   Dim MasterEnable As Byte
   Dim SlaveEnable As Byte
   Dim MasterNetwork As Byte
   Dim SlaveNetwork As Byte
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=2)]
public struct TIMESYNC_ICSHARDWARE_SETTINGS
{
   public byte MasterEnable;
   public byte SlaveEnable;
   public byte MasterNetwork;
   public byte SlaveNetwork;
}
```
</TabItem>
</Tabs>

#### Remarks

| Item          | Description |
| ------------- | ----------- |
| MasterEnable  | Not Defined |
| SlaveEnable   | Not Defined |
| MasterNetwork | Not Defined |
| SlaveNetwork  | Not Defined |

