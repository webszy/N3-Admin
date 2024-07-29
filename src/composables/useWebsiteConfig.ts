import config from "@/config/website"
export const  useSiteConfig = () => {
    return useState('siteConfig',()=>config)
}
