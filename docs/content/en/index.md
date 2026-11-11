---
seo:
  title: HavanoZimra Cloud API - Zimbabwe Fiscalization Integration
  description: Official developer documentation for HavanoZimra Cloud. Connect your ERP, POS, or billing system with the Zimbabwe Revenue Authority (ZIMRA) Fiscal Data Management System (FDMS).
---

::u-page-hero
#title
HavanoZimra Cloud API

#description
Modern, secure cloud API gateway for seamless ZIMRA fiscalization compliance. :br Connect your ERP, accounting software, or Point of Sale system to the Zimbabwe Revenue Authority FDMS in minutes.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /en/getting-started/quick-start
  trailing-icon: i-lucide-arrow-right
  ---
  Quick Start
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-code-xml
  size: xl
  to: /en/api-reference/overview
  variant: outline
  ---
  API Reference
  :::

#headline
  :::u-badge
  ---
  color: success
  variant: subtle
  size: sm
  ---
  ZIMRA FDMS Compliant • SI 153/2024
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    icon: i-lucide-shield-check
    spotlight: true
    class: group col-span-2 lg:col-span-1
    ---
    #title
    [Full ZIMRA Fiscal Compliance]{.text-primary}
    
    #description
    Generate certified fiscal receipts, digital signatures, and QR codes fully compliant with Statutory Instruments 153 of 2024 and 65A of 2020.
    ::::
  
    ::::u-page-card
    ---
    icon: i-lucide-terminal
    spotlight: true
    class: col-span-2
    ---
      :::::div{.bg-elevated.rounded-lg.p-4.overflow-x-auto}
      ```bash
      # 1. Obtain Session CSRF Token
      curl -X POST https://your-site-name/api/method/havanozimracloud.api.token

      # 2. Ping ZIMRA Server for Device Status
      curl -X POST https://your-site-name/api/method/havanozimracloud.api.pingzimra \
        -H "Authorization: token KEY:SECRET" \
        -H "X-Frappe-CSRF-Token: TOKEN" \
        -d "device_sn=1234567890"

      # 3. Submit Fiscal Sales Invoice with Line-Item XML
      curl -X POST https://your-site-name/api/method/havanozimracloud.api.sendinvoice \
        -H "Authorization: token KEY:SECRET" \
        -H "X-Frappe-CSRF-Token: TOKEN" \
        -d "device_sn=1234567890&invoice_number=INV001&currency=USD..."
      ```
      :::::
    
    #title
    [Clean & Unified REST Architecture]{.text-primary}
    
    #description
    Standard HTTP POST requests with form URL-encoded parameters and structured XML item bodies eliminate complex hardware-level serial protocols.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-refresh-cw
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
    #title
    [Credit Notes & Reversals]{.text-primary}
    
    #description
    Seamlessly issue fiscal credit notes and invoice cancellations linked directly to original ZIMRA global receipt numbers (`global_invoice_no`).
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-cloud-off
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
    #title
    [Resilient Offline Buffering]{.text-primary}
    
    #description
    Keep your retail checkouts and sales desks running uninterrupted during government server downtime with local queue caching and post-sync.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-coins
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
    #title
    [Multi-Currency Support]{.text-primary}
    
    #description
    Native multi-currency handling for transactions in USD, ZiG, and foreign currencies with accurate VAT rate categorization (Standard, Zero Rated, Exempt).
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-code-2
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
    #title
    [Ready-to-Use SDKs]{.text-primary}
    
    #description
    Battle-tested integration code for VB.NET, C# (.NET Core/Framework), Python, and cURL to get your development team integrated swiftly.
    ::::
  :::
::

::u-page-section
  :::div{.text-center.space-y-4.max-w-2xl.mx-auto}
    ## Ready to integrate your ERP or POS?
    
    Get in touch with Havano Systems for your API credentials and device serial numbers, or jump directly into the developer guides.
    
    ::::div{.flex.justify-center.gap-4.pt-2}
      :::u-button
      ---
      color: primary
      size: lg
      to: /en/getting-started/overview
      ---
      Getting Started
      :::

      :::u-button
      ---
      variant: outline
      size: lg
      to: /en/developer-guides/vb-net
      ---
      VB.NET Guide
      :::
    ::::
  :::
::
