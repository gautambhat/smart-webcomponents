#pragma checksum "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "20caaba3753704925599b2003ff73bfba92301bd"
// <auto-generated/>
#pragma warning disable 1591
namespace latestBlazor.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using latestBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using latestBlazor.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using Smart.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\_Imports.razor"
using MudBlazor;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/tree")]
    public partial class Counter : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<style>\r\n    smart-window {\r\n        --smart-window-default-width: 50%;\r\n    }\r\n</style>\r\n");
            __builder.OpenComponent<Smart.Blazor.Button>(1);
            __builder.AddAttribute(2, "OnClick", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<Microsoft.AspNetCore.Components.Web.MouseEventArgs>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 9 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                  OnClick

#line default
#line hidden
#nullable disable
            )));
            __builder.AddAttribute(3, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddContent(4, "Open/Close");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(5, "\r\n");
            __builder.OpenComponent<Smart.Blazor.Window>(6);
            __builder.AddAttribute(7, "IsOpened", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Boolean>(
#nullable restore
#line 10 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                   opened

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(8, "WindowParent", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Object>(
#nullable restore
#line 10 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                          WindowHolder

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(9, "label", "Window With Form");
            __builder.AddAttribute(10, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenElement(11, "div");
                __builder2.AddAttribute(12, "id", "form");
                __builder2.OpenComponent<Smart.Blazor.Form>(13);
                __builder2.AddAttribute(14, "id", "profileForm");
                __builder2.AddAttribute(15, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.OpenComponent<Smart.Blazor.FormGroup>(16);
                    __builder3.AddAttribute(17, "id", "employee");
                    __builder3.AddAttribute(18, "Label", "Employee");
                    __builder3.AddAttribute(19, "DataField", "employee");
                    __builder3.AddAttribute(20, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.OpenComponent<Smart.Blazor.FormGroup>(21);
                        __builder4.AddAttribute(22, "DataField", "name");
                        __builder4.AddAttribute(23, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder5) => {
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(24);
                            __builder5.AddAttribute(25, "Label", "Photo");
                            __builder5.AddAttribute(26, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 15 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                            FormControlControlType.Template

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(27, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder6) => {
                                __builder6.AddMarkupContent(28, "<div><img width=\"100\" src=\"https://htmlelements.com/demos/images/people/anne.png\"></div>");
                            }
                            ));
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(29, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(30);
                            __builder5.AddAttribute(31, "Info", "Enter First Name");
                            __builder5.AddAttribute(32, "Required", true);
                            __builder5.AddAttribute(33, "Placeholder", "First Name");
                            __builder5.AddAttribute(34, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 18 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                                        FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(35, "DataField", "firstName");
                            __builder5.AddAttribute(36, "Label", "First Name");
                            __builder5.AddAttribute(37, "Class", "outlined");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(38, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(39);
                            __builder5.AddAttribute(40, "Info", "Enter Last Name");
                            __builder5.AddAttribute(41, "Required", true);
                            __builder5.AddAttribute(42, "Placeholder", "Last Name");
                            __builder5.AddAttribute(43, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 19 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                                      FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(44, "DataField", "lastName");
                            __builder5.AddAttribute(45, "Label", "Last Name");
                            __builder5.AddAttribute(46, "Class", "outlined");
                            __builder5.CloseComponent();
                        }
                        ));
                        __builder4.CloseComponent();
                        __builder4.AddMarkupContent(47, "\r\n                ");
                        __builder4.OpenComponent<Smart.Blazor.FormGroup>(48);
                        __builder4.AddAttribute(49, "Label", "Details");
                        __builder4.AddAttribute(50, "DataField", "details");
                        __builder4.AddAttribute(51, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder5) => {
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(52);
                            __builder5.AddAttribute(53, "Placeholder", "Company Name");
                            __builder5.AddAttribute(54, "Required", true);
                            __builder5.AddAttribute(55, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 22 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                  FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(56, "DataField", "company");
                            __builder5.AddAttribute(57, "Label", "Company");
                            __builder5.AddAttribute(58, "Class", "outlined");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(59, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(60);
                            __builder5.AddAttribute(61, "Placeholder", "Address");
                            __builder5.AddAttribute(62, "Required", true);
                            __builder5.AddAttribute(63, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 23 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                             FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(64, "DataField", "address");
                            __builder5.AddAttribute(65, "Label", "Address");
                            __builder5.AddAttribute(66, "Class", "outlined");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(67, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(68);
                            __builder5.AddAttribute(69, "Placeholder", "City");
                            __builder5.AddAttribute(70, "Required", true);
                            __builder5.AddAttribute(71, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 24 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                          FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(72, "DataField", "city");
                            __builder5.AddAttribute(73, "Label", "City");
                            __builder5.AddAttribute(74, "Class", "outlined");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(75, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(76);
                            __builder5.AddAttribute(77, "Placeholder", "State");
                            __builder5.AddAttribute(78, "Required", true);
                            __builder5.AddAttribute(79, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 25 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                           FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(80, "DataField", "state");
                            __builder5.AddAttribute(81, "Label", "State");
                            __builder5.AddAttribute(82, "Class", "outlined");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(83, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(84);
                            __builder5.AddAttribute(85, "Placeholder", "Zip / Postal Code");
                            __builder5.AddAttribute(86, "Required", true);
                            __builder5.AddAttribute(87, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 26 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                       FormControlControlType.Input

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(88, "DataField", "zip");
                            __builder5.AddAttribute(89, "Label", "Zip / Postal Code");
                            __builder5.AddAttribute(90, "Class", "outlined");
                            __builder5.CloseComponent();
                        }
                        ));
                        __builder4.CloseComponent();
                        __builder4.AddMarkupContent(91, "\r\n                ");
                        __builder4.OpenComponent<Smart.Blazor.FormGroup>(92);
                        __builder4.AddAttribute(93, "Columns", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Int32>(
#nullable restore
#line 28 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                    2

#line default
#line hidden
#nullable disable
                        ));
                        __builder4.AddAttribute(94, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder5) => {
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(95);
                            __builder5.AddAttribute(96, "LabelAlign", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlAlign>(
#nullable restore
#line 29 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                             FormControlAlign.Right

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(97, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 29 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                  FormControlControlType.Submit

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(98, "Label", "Submit");
                            __builder5.AddAttribute(99, "Class", "primary");
                            __builder5.CloseComponent();
                            __builder5.AddMarkupContent(100, "\r\n                    ");
                            __builder5.OpenComponent<Smart.Blazor.FormControl>(101);
                            __builder5.AddAttribute(102, "Align", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlAlign>(
#nullable restore
#line 30 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                        FormControlAlign.Left

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(103, "Action", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlAction>(
#nullable restore
#line 30 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                       FormControlAction.Reset

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(104, "ControlType", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Smart.Blazor.FormControlControlType>(
#nullable restore
#line 30 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
                                                                                                             FormControlControlType.Button

#line default
#line hidden
#nullable disable
                            ));
                            __builder5.AddAttribute(105, "Label", "Reset");
                            __builder5.CloseComponent();
                        }
                        ));
                        __builder4.CloseComponent();
                    }
                    ));
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
                __builder2.CloseElement();
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
#nullable restore
#line 36 "C:\Users\macair1\Desktop\smart-tests\latestBlazor\Pages\Counter.razor"
       
    private bool opened = false;
    private void OnClick(MouseEventArgs eventArgs)
    {
        opened = !opened;
    }
    public object WindowHolder = "body";

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591