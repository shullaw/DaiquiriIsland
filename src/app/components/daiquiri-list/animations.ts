import {
  animate,
  animation,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";

export const SidebarOpenAnimation = animation([
  style({ left: "-{{menuWidth}}" }),
  query(".menu-item", [style({ transform: "translateX(-{{menuWidth}})" })]),
  sequence([
    animate("200ms", style({ left: "0" })),
    query(".menu-item", [
      stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
    ])
  ])
]);

export const SidebarCloseAnimation = animation([
  style({ left: "0" }),
  query(".menu-item", [style({ transform: "none" })]),
  sequence([
    query(".menu-item", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({ transform: "translateX(-{{menuWidth}})" })
        )
      ])
    ]),
    animate("200ms", style({ left: "-{{menuWidth}}" }))
  ])
]);

export const DropSidebarOpenAnimation = animation([
  style({ top: "-{{menuHeight}}" }),
  query(".menu-item", [style({ transform: "translateY(-{{menuHeight}})" })]),
  sequence([
    animate("200ms", style({ top: "0" })),
    query(".menu-item", [
      stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
    ])
  ])
]);

export const DropSidebarCloseAnimation = animation([
  style({ top: "0" }),
  query(".menu-item", [style({ transform: "none" })]),
  sequence([
    query(".menu-item", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({ transform: "translateY(-{{menuHeight}})" })
        )
      ])
    ]),
    animate("200ms", style({ top: "-{{menuHeight}}" }))
  ])
]);

export const DropDownAnimation = trigger("dropDownMenu", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    query(".menu-item", [
      style({ opacity: 0, transform: "translateY(-50px)" })
    ]),
    sequence([
      animate("200ms", style({ height: "*" })),
      query(".menu-item", [
        stagger(-50, [
          animate("400ms ease", style({ opacity: 1, transform: "none" }))
        ])
      ])
    ])
  ]),

  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    query(".menu-item", [style({ opacity: 1, transform: "none" })]),
    sequence([
      query(".menu-item", [
        stagger(50, [
          animate(
            "400ms ease",
            style({ opacity: 0, transform: "translateY(-50px)" })
          )
        ])
      ]),
      animate("200ms", style({ height: 0 }))
    ])
  ])
]);