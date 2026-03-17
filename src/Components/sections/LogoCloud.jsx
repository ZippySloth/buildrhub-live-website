import React from 'react';

const row1 = [
  { name: 'dbt', slug: 'dbt' },
  { name: 'Snowflake', slug: 'snowflake' },
  { name: 'BigQuery', slug: 'googlebigquery' },
  { name: 'Databricks', slug: 'databricks' },
  { name: 'Looker', slug: 'looker' },
  { name: 'Tableau', slug: 'tableau' },
  { name: 'Power BI', slug: 'powerbi' },
  { name: 'Metabase', slug: 'metabase' },
  { name: 'Redshift', slug: 'amazonredshift' },
  { name: 'Fivetran', slug: 'fivetran' },
  { name: 'Airbyte', slug: 'airbyte' },
  { name: 'Segment', slug: 'segment' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Pipedrive', slug: 'pipedrive' },
  { name: 'Intercom', slug: 'intercom' },
  { name: 'Zendesk', slug: 'zendesk' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'Linear', slug: 'linear' },
  { name: 'Jira', slug: 'jira' },
  { name: 'Asana', slug: 'asana' },
  { name: 'ClickUp', slug: 'clickup' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Make', slug: 'make' },
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'GCP', slug: 'googlecloud' },
  { name: 'Azure', slug: 'microsoftazure' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'GitHub', slug: 'github' },
  { name: 'GitLab', slug: 'gitlab' },
  { name: 'Datadog', slug: 'datadog' },
  { name: 'Sentry', slug: 'sentry' },
  { name: 'PagerDuty', slug: 'pagerduty' },
  { name: 'Amplitude', slug: 'amplitude' },
  { name: 'Mixpanel', slug: 'mixpanel' },
  { name: 'PostHog', slug: 'posthog' },
  { name: 'Retool', slug: 'retool' },
  { name: 'Webflow', slug: 'webflow' },
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Typeform', slug: 'typeform' },
  { name: 'Calendly', slug: 'calendly' },
];

const row2 = [
  { name: 'QuickBooks', slug: 'quickbooks' },
  { name: 'Xero', slug: 'xero' },
  { name: 'NetSuite', slug: 'netsuite' },
  { name: 'SAP', slug: 'sap' },
  { name: 'Workday', slug: 'workday' },
  { name: 'Rippling', slug: 'rippling' },
  { name: 'Gusto', slug: 'gusto' },
  { name: 'BambooHR', slug: 'bamboohr' },
  { name: 'Deel', slug: 'deel' },
  { name: 'Bill.com', slug: 'billdotcom' },
  { name: 'Brex', slug: 'brex' },
  { name: 'Ramp', slug: 'ramp' },
  { name: 'Expensify', slug: 'expensify' },
  { name: 'Plaid', slug: 'plaid' },
  { name: 'Carta', slug: 'carta' },
  { name: 'Greenhouse', slug: 'greenhouse' },
  { name: 'Monday.com', slug: 'mondaydotcom' },
  { name: 'Confluence', slug: 'confluence' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Miro', slug: 'miro' },
  { name: 'Loom', slug: 'loom' },
  { name: 'Zoom', slug: 'zoom' },
  { name: 'Google Sheets', slug: 'googlesheets' },
  { name: 'Google Analytics', slug: 'googleanalytics' },
  { name: 'Tag Manager', slug: 'googletagmanager' },
  { name: 'Klaviyo', slug: 'klaviyo' },
  { name: 'Mailchimp', slug: 'mailchimp' },
  { name: 'SendGrid', slug: 'sendgrid' },
  { name: 'ActiveCampaign', slug: 'activecampaign' },
  { name: 'Twilio', slug: 'twilio' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Elasticsearch', slug: 'elasticsearch' },
  { name: 'Stitch', slug: 'stitchdata' },
  { name: 'Hightouch', slug: 'hightouch' },
  { name: 'RudderStack', slug: 'rudderstack' },
  { name: 'Zoho', slug: 'zoho' },
  { name: 'WooCommerce', slug: 'woocommerce' },
  { name: 'Basecamp', slug: 'basecamp' },
  { name: 'Lever', slug: 'lever' },
  { name: 'Superset', slug: 'apachesuperset' },
  { name: 'Glean', slug: 'glean' },
  { name: 'Attio', slug: 'attio' },
  { name: 'Sigma', slug: 'sigmacomputing' },
];

const LogoItem = ({ name, slug }) => (
  <div className="mx-4 sm:mx-5 flex flex-col items-center gap-1.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={name}
      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
    <span className="text-xs text-white/40 font-medium whitespace-nowrap">{name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((tool, i) => (
          <LogoItem key={i} name={tool.name} slug={tool.slug} />
        ))}
      </div>
    </div>
  );
};

const LogoCloud = () => (
  <section className="py-12 sm:py-16 border-y border-white/5 overflow-hidden">
    <p className="text-center text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-widest mb-8 sm:mb-10 px-4">
      We connect to the tools your team already uses
    </p>
    <div className="flex flex-col gap-6 sm:gap-8">
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  </section>
);

export default LogoCloud;
