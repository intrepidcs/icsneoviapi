---
sidebar_position: 12
id: uart_settings-structure
---

# UART_SETTINGS Structure

This structure defines settings for UART access on neoVI Fire devices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct _UART_SETTINGS{
   unsigned short Baudrate;
   unsigned short spbrg;
   unsigned short brgh;
   unsigned short parity;
   unsigned short stop_bits;
   unsigned char flow_control; // 0- off, 1 - Simple CTS RTS,
   unsigned char reserved_1;
   unsigned int bOptions; //AND to combind these values invert_tx = 1 invert_rx = 2 half_duplex = 4
} UART_SETTINGS;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```visual-basic
<StructLayout(LayoutKind.Sequential, Pack:=2)> Public Structure UART_SETTINGS
   Dim Baudrate As UInt16
   Dim spbrg As UInt16
   Dim brgh As UInt16
   Dim parity As UInt16
   Dim stop_bits As UInt16
   Dim flow_control As Byte '// 0- off, 1 - Simple CTS RTS,
   Dim reserved_1 As Byte
   Dim bOptions As UInt32 '//AND to combind these values invert_tx = 1 invert_rx = 2 half_duplex = 4
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=2)]
public struct UART_SETTINGS
{
   public UInt16 Baudrate; If
   public UInt16 spbrg;
   public UInt16 brgh;
   public UInt16 parity;
   public UInt16 stop_bits;
   public byte flow_control; // 0- off, 1 - Simple CTS RTS,
   public byte reserved_1;
   public UInt32 bOptions; //AND to combind these values invert_tx = 1 invert_rx = 2 half_duplex = 4
}
```
</TabItem>
</Tabs>

**Remarks**

**Structure Elements**

| Item                                                        | Description                                                                                                                                                                                                                                         |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [icscm\_uint16](../intrepid-api-data-types) Baudrate        | Holds the baud rate for the UART Connection. An example value could be 10417 or 9600                                                                                                                                                                |
| [icscm\_uint16](../intrepid-api-data-types) spbrg           |                                                                                                                                                                                                                                                     |
| [icscm\_uint16](../intrepid-api-data-types) brgh            |                                                                                                                                                                                                                                                     |
| [icscm\_uint16](../intrepid-api-data-types) parity          | <p>Sets the Parity type. Valid values are below</p><table><thead></thead><tbody><tr><td>None</td><td>0</td></tr><tr><td>Even</td><td>1</td></tr><tr><td>Odd</td><td>2</td></tr></tbody></table>                                                     |
| [icscm\_uint16](../intrepid-api-data-types) stop\_bits      | <p>Sets the number of stop bits to use. Valid values are below.</p><table><thead></thead><tbody><tr><td>One Stop Bit</td><td>1</td></tr><tr><td>Two Stop Bits</td><td>2</td></tr></tbody></table>                                                   |
| [icscm\_uint8](../intrepid-api-data-types) flow\_control    | Set to 0 for no flow control and 1 for simple CTS RTS                                                                                                                                                                                               |
| [icscm\_uint8](../intrepid-api-data-types) reserved         |                                                                                                                                                                                                                                                     |
| [icscm\_uint32](../intrepid-api-data-types) bOptions        | <p>Bitfield containing UART Options</p><table><thead></thead><tbody><tr><td>Invert Tx</td><td>1</td></tr><tr><td>Invert Rx</td><td>2</td></tr><tr><td>Half Duplex</td><td>4</td></tr></tbody></table>                                               |
