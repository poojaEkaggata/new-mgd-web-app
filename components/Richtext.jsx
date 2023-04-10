import { PrismicRichText } from "@prismicio/react";

const Richtext= ({field,className})=>{
    return(
        field&&(
            <div className={className}>
                <PrismicRichText field={field}></PrismicRichText>
            </div>
        )
    )
}

export default Richtext